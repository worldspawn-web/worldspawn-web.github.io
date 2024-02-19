import styles from './Education.module.scss';

export const Education = () => {
  return (
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
  );
};
