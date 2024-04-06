import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <main className={styles.main}>
      <span className={styles._404}>404</span>
      <span className={styles.notFound}>Not found</span>
    </main>
  );
};

export default NotFound;
