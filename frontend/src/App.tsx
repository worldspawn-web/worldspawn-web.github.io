import { Background, HorizontalDivider, renderProgressBar } from './common';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <Background />
      <div className={styles.page}>
        <section className={styles.heading__wrapper}>
          <section className={styles.heading__name}>
            <img
              className={styles.heading__image}
              src="https://images.unsplash.com/photo-1527630941-4a229fd674ab?q=80&w=2153&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h1 className={styles.heading__header}>Michael Lozitckii</h1>
            <span className={styles.heading__username}>@worldspawn</span>
          </section>
          <section className={styles.heading__desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            faucibus consequat tempus. Aliquam ac consequat metus. Donec et leo
            nunc. Nullam turpis ligula, mattis a dictum et, suscipit in elit.
            Nam et aliquam odio. Mauris et mattis odio, quis consectetur est.
          </section>
        </section>
        <HorizontalDivider />
        <section className={styles.links__wrapper}>
          <div className={styles.links}>
            <a href="https://github.com/worldspawn-web" target="_blank">
              <img
                className={styles.link}
                src="../src/assets/icons/Github.png"
              />
            </a>
            <a href="https://www.instagram.com/netskytten" target="_blank">
              <img
                className={styles.link}
                src="../src/assets/icons/Telegram.png"
              />
            </a>
            <a href="https://t.me/worldspawn" target="_blank">
              <img
                className={styles.link}
                src="../src/assets/icons/Insta.png"
              />
            </a>
            <a href="https://vk.com/netskyttenofficial" target="_blank">
              <img className={styles.link} src="../src/assets/icons/VK.png" />
            </a>
          </div>
        </section>
        <section className={styles.category__header}>
          <h2>Who am I?</h2>
        </section>
        <section className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          faucibus consequat tempus. Aliquam ac consequat metus. Donec et leo
          nunc. Nullam turpis ligula, mattis a dictum et, suscipit in elit. Nam
          et aliquam odio. Mauris et mattis odio, quis consectetur est. Praesent
          pulvinar, dui ut bibendum viverra, mauris ligula consectetur neque, ac
          ullamcorper neque quam efficitur velit. Ut tempus tortor ut dictum
          laoreet. Suspendisse convallis dui enim, non porta mauris tincidunt
          in. Praesent convallis ullamcorper diam vehicula commodo. Etiam
          rhoncus sagittis eros vel eleifend.
        </section>
        <section className={styles.category__header}>
          <h2>Skills</h2>
        </section>
        {/* TODO: REFACTOR BY SEPARATING THE LOGIC 
        INTO ANOTHER COMPONENT */}
        <section className={styles.skills}>
          <div className={styles.skill}>
            <h2 className={styles.skill__header}>React.js</h2>
            {renderProgressBar(70)}
          </div>
          <div className={styles.skill}>
            <h2 className={styles.skill__header}>Typescript</h2>
            {renderProgressBar(65)}
          </div>
          <div className={styles.skill}>
            <h2 className={styles.skill__header}>Javascript</h2>
            {renderProgressBar(80)}
          </div>
          <div className={styles.skill}>
            <h2 className={styles.skill__header}>Redux TK</h2>
            {renderProgressBar(30)}
          </div>
          <div className={styles.skill}>
            <h2 className={styles.skill__header}>HTML</h2>
            {renderProgressBar(90)}
          </div>
          <div className={styles.skill}>
            <h2 className={styles.skill__header}>CSS / SCSS</h2>
            {renderProgressBar(70)}
          </div>
          <div className={styles.skill}>
            <h2 className={styles.skill__header}>Webpack / Vite</h2>
            {renderProgressBar(65)}
          </div>
          <div className={styles.skill}>
            <h2 className={styles.skill__header}>Bootstrap</h2>
            {renderProgressBar(75)}
          </div>
        </section>
        <section className={styles.category__header}>
          <h2>Education</h2>
        </section>
        <section className={styles.education}>
          <div className={styles.education__year}>2024 - NOW</div>
          <div className={styles.education__list}>
            <div className={styles.education__name}>Self-Development</div>
            <div className={styles.education__spec}>Learning new tech</div>
            <div className={styles.education__location}>Remote / On-side</div>
          </div>
          <div className={styles.education__year}>2023 - 2024</div>
          <div className={styles.education__list}>
            <div className={styles.education__name}>Hexlet</div>
            <div className={styles.education__spec}>Frontend Development</div>
            <div className={styles.education__location}>Remote</div>
          </div>
          <div className={styles.education__year}>2018 - 2022</div>
          <div className={styles.education__list}>
            <div className={styles.education__name}>
              People's Friendship University of Russia
            </div>
            <div className={styles.education__spec}>
              Bachelor - Hotel Management
            </div>
            <div className={styles.education__location}>Moscow, Russia</div>
          </div>
          <div className={styles.education__list}>
            <div className={styles.education__name}>
              People's Friendship University of Russia
            </div>
            <div className={styles.education__spec}>
              Bachelor - English Translator
            </div>
            <div className={styles.education__location}>Moscow, Russia</div>
          </div>
          <div className={styles.education__year}>2020 - 2020</div>
          <div className={styles.education__list}>
            <div className={styles.education__name}>Erasmus</div>
            <div className={styles.education__spec}>
              Course - Entrepreneurship competencies
            </div>
            <div className={styles.education__location}>Remote</div>
          </div>
          <div className={styles.education__list}>
            <div className={styles.education__name}>
              Northern Arizona University
            </div>
            <div className={styles.education__spec}>
              Course - The Pathways to Professional Leadership
            </div>
            <div className={styles.education__location}>Remote</div>
          </div>
          <div className={styles.education__year}>2017 - 2017</div>
          <div className={styles.education__list}>
            <div className={styles.education__name}>Solbridge</div>
            <div className={styles.education__spec}>
              English Qualification Summer Camp
            </div>
            <div className={styles.education__location}>Daejeon, Korea</div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
