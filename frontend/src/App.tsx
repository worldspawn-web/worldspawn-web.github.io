import { Background, HorizontalDivider } from './common';
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
          rhoncus sagittis eros vel eleifend. Aenean tincidunt massa erat,
          sagittis facilisis ante vehicula a. Vestibulum non consequat quam, id
          fringilla eros. Mauris et dapibus odio. Nulla lacinia neque ligula,
          nec dapibus neque commodo posuere. Nam sed nulla dapibus, venenatis
          leo a, tempor turpis.
        </section>
        <section className={styles.category__header}>
          <h2>Skills</h2>
        </section>
        <section className={styles.skills}>1</section>
      </div>
    </>
  );
}

export default App;
