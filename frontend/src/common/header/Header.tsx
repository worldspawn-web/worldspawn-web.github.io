import styles from './Header.module.scss';

export const Header = ({ children }) => {
  return (
    <section className={styles.category__header}>
      <h2>{children}</h2>
    </section>
  );
};
