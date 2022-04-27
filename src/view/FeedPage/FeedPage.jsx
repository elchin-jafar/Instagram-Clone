import img from "../../assets/context.png";
import styles from "./FeedPage.module.css";

export default function FeedPage() {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <img src={img} className={styles.img} alt="instagram-logo" />

          <div style={{ maxWidth: "252px", margin: "auto" }}>
            <div className={styles.inputIcons}>
              <svg
                className={`${styles.icon} _8-yf5 `}
                aria-label="Search"
                color="#8e8e8e"
                fill="#8e8e8e"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16"
              >
                <path
                  d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="16.511"
                  x2="22"
                  y1="16.511"
                  y2="22"
                ></line>
              </svg>
              <input
                className={styles.inputField}
                type="search"
                placeholder="Search"
              />
            </div>
          </div>

          <div className={styles.rightTopIcons}>
            <svg
              aria-label="Home"
              class="_8-yf5 "
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path>
            </svg>
            <svg
              aria-label="Messenger"
              class="_8-yf5 "
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="1.739"
              ></path>
              <path
                d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <svg
              aria-label="New Post"
              class="_8-yf5 "
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="6.545"
                x2="17.455"
                y1="12.001"
                y2="12.001"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="12.003"
                x2="12.003"
                y1="6.545"
                y2="17.455"
              ></line>
            </svg>
            <svg
              aria-label="Find People"
              class="_8-yf5 "
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <polygon
                fill="none"
                points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
              <polygon
                fill-rule="evenodd"
                points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
              ></polygon>
              <circle
                cx="12.001"
                cy="12.005"
                fill="none"
                r="10.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
            </svg>
            <svg
              aria-label="Activity Feed"
              class="_8-yf5 "
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
            </svg>
          </div>
        </nav>
      </header>
      <div className={styles.main}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          temporibus dolor tenetur mollitia a iste aliquam totam molestias,
          placeat voluptatum sed, cupiditate cumque blanditiis unde pariatur.
          Quam voluptatum, aspernatur quisquam error exercitationem, ex quas
          necessitatibus quidem praesentium nobis obcaecati distinctio, dolorem
          nemo deserunt labore voluptas earum culpa sapiente corporis. Sequi
          dolores omnis dolorum itaque, voluptate suscipit nihil, quo molestiae
          quibusdam, nisi tempora rerum nam cum natus amet architecto. Enim eum
          eligendi sunt repellendus ducimus voluptatum reiciendis temporibus
          rerum amet. Id, dolorem eaque vero ut, fugit vitae similique
          perferendis consectetur recusandae quam neque veritatis commodi
          repellendus sed expedita eveniet tenetur earum. Repudiandae mollitia
          atque consectetur vel quae repellendus molestias, quia culpa odio id
          doloremque earum, corporis, excepturi quas. Consequatur saepe dolorem
          veritatis et obcaecati explicabo cupiditate. Molestias amet, nostrum
          earum modi aliquam possimus provident totam quaerat quam beatae. Id
          tenetur, consequuntur vel debitis libero velit maiores saepe expedita
          architecto, ab, atque incidunt sapiente magnam! Itaque dolorum, fuga
          dicta vel maxime aspernatur numquam! Sapiente ullam autem nam, illum
          amet incidunt et fugit id libero quam dolor iure sint vitae
          consequatur odio dolores! Sequi porro aperiam fugit, incidunt
          quibusdam voluptatibus nihil cupiditate nemo odit totam reprehenderit
          ea nam voluptatum magni eaque esse! Voluptate perferendis quisquam
          quam expedita ipsam? Veritatis illo quasi quibusdam nobis deleniti,
          exercitationem consectetur error, natus, suscipit omnis molestiae
          numquam temporibus fugit magni? Soluta tenetur ad pariatur
          consequuntur molestias atque expedita corrupti quaerat error debitis
          odio, possimus culpa praesentium maiores neque repellat aliquam. Ea
          maiores, tempora, quae dicta facere, repellendus quasi velit
          perferendis eveniet sunt repudiandae aliquam nam vel! At vitae amet
          porro, numquam cupiditate illum laborum possimus repellendus, ad nihil
          placeat ex tenetur modi eum? Provident qui iste deleniti reprehenderit
          dolores sapiente optio esse illo, expedita nam, totam neque, fugiat
          unde ab dicta sed inventore aspernatur quaerat soluta consectetur aut
          laudantium! Expedita repellat, eligendi consequuntur illo facilis
          doloribus velit obcaecati corrupti deleniti modi totam officia aut vel
          error possimus atque ipsam distinctio illum suscipit harum impedit
          quod? Delectus eveniet facere fuga aperiam porro nostrum modi placeat
          numquam sequi doloribus cum, aliquid alias accusantium natus similique
          sapiente tenetur perferendis animi ut repellendus earum illum non
          tempora. Porro sapiente, nulla quibusdam blanditiis sit nisi
          laudantium quaerat adipisci numquam inventore impedit, deleniti non
          sunt eos, placeat nobis. Dolorum temporibus nisi perspiciatis odit
          repellendus porro blanditiis quam modi, nam sint explicabo esse
          debitis? Quos modi voluptatem saepe incidunt amet harum officia magni
          distinctio nesciunt asperiores explicabo qui mollitia, dolore numquam
          et repudiandae natus voluptate obcaecati voluptates doloremque
          facilis? Alias, saepe natus itaque corrupti quidem ut quo, sint,
          repellendus eligendi eos reprehenderit architecto commodi! Nostrum,
          voluptate ipsa omnis porro laborum est architecto? Amet nam dolore
          cumque ipsa sint exercitationem illum, officia deleniti sapiente
          tempora necessitatibus dolores suscipit accusantium explicabo, magnam
          animi nobis unde fugiat sit eveniet. Ea ullam, dignissimos, quam ipsum
          nihil, eveniet deserunt ipsam rem totam aliquid dicta quas? Deserunt
          iure ab exercitationem corrupti, minus aut aliquid ratione consectetur
          inventore totam consequatur maxime aspernatur, nemo pariatur,
          voluptatibus hic rerum illum error nisi obcaecati sequi?
        </p>
      </div>
    </>
  );
}
