import { useEffect, useState } from "react";
import InstagramPost from "../../components/InstagramPost/InstagramPost";
import MainHeader from "../../components/MainHeader/MainHeader";
import styles from "./FeedPage.module.css";

export default function FeedPage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos?page=${page}&per_page=5&client_id=ZRYIbgpUWEVo4o_1apdz5wxs4ujLhd18wIy8N1kXMa8`
    )
      .then((res) => res.json())
      .then((res) => setData((oldData) => [...oldData, ...res]));
  }, [page]);

  // useEffect(() => {

  //   function handleScroll() {
  //     const {clientHeight, scrollTop, scrollHeight} = document.documentElement
  //     if(scrollTop + clientHeight >= scrollHeight - 50) {
  //       setPage(page => page + 1)
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll, {passive: true});
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])

  function handleLoadMore() {
    setPage((page) => page + 1);
  }

  data.map((user) => console.log(user));

  return (
    <>
      <MainHeader />
      <div className={styles.main}>
        <main>
          {data.map((user) => (
            <InstagramPost
              key={user.id}
              profileImage={user.user.profile_image.small}
              username={user.user.first_name}
              location={user.user.location}
              image={user.urls.small}
              likes={user.likes}
            />
          ))}
        </main>

        <button style={{ marginLeft: "50%" }} onClick={handleLoadMore}>
          load more
        </button>
      </div>
    </>
  );
}
