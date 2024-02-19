import styles from './Description.module.scss';

export const Description = ({ children }) => (
  <section className={styles.description}>{children}</section>
);
