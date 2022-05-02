import { useEffect, useState } from "react";
import InstagramPost from "../../components/InstagramPost/InstagramPost";
import MainHeader from "../../components/MainHeader/MainHeader";
import styles from "./FeedPage.module.css";

import _ from "lodash";

export default function FeedPage({setUserData}) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // console.log(data);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos?page=${page}&per_page=5&client_id=ZRYIbgpUWEVo4o_1apdz5wxs4ujLhd18wIy8N1kXMa8`
    )
      .then((res) => res.json())
      .then((res) => setData((oldData) => [...oldData, ...res]));
  }, [page]);

  useEffect(() => {
    function handleScroll() {
      const { clientHeight, scrollTop, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        setPage((page) => page + 1);
      }
    }

    window.addEventListener("scroll", _.debounce(handleScroll, 300), {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", _.debounce(handleScroll, 300));
    };
  }, []);

  return (
    <>
      <MainHeader />
      <div className={styles.main}>
        <main>
          {data.map((user) => (
            <InstagramPost
              key={user.id}
              profileImage={user.user.profile_image.small}
              // bigPhoto={user.user.profile_image.regular}
              username={user.user.username}
              // name={user.user.name}
              // totalphotos={user.user.total_photos}
              // bio={user.user.bio}
              location={user.user.location}
              image={user.urls.regular}
              likes={user.likes}
              setUserData={setUserData}
            />
          ))}
        </main>
      </div>
    </>
  );
}
