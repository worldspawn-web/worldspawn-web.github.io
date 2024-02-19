import styles from './ProfileLinks.module.scss';

export const ProfileLinks = () => {
  return (
    <section className={styles.links__wrapper}>
      <div className={styles.links}>
        <a href="https://github.com/worldspawn-web" target="_blank">
          <img className={styles.link} src="../src/assets/icons/Github.png" />
        </a>
        <a href="https://www.instagram.com/netskytten" target="_blank">
          <img className={styles.link} src="../src/assets/icons/Telegram.png" />
        </a>
        <a href="https://t.me/worldspawn" target="_blank">
          <img className={styles.link} src="../src/assets/icons/Insta.png" />
        </a>
        <a href="https://vk.com/netskyttenofficial" target="_blank">
          <img className={styles.link} src="../src/assets/icons/VK.png" />
        </a>
      </div>
    </section>
  );
};
