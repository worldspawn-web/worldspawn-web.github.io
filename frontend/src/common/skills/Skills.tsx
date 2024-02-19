import { renderProgressBar } from '..';
import styles from './Skills.module.scss';

export const Skills = () => {
  return (
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
  );
};
