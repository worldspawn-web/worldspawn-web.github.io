import { useData } from '../../api/DataContext';
import styles from './MainProfile.module.scss';

export const MainProfile = () => {
  const data = useData();
  console.log(data);

  return (
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus
        consequat tempus. Aliquam ac consequat metus. Donec et leo nunc. Nullam
        turpis ligula, mattis a dictum et, suscipit in elit. Nam et aliquam
        odio. Mauris et mattis odio, quis consectetur est.
      </section>
    </section>
  );
};
