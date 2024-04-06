import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <span className={styles.descriptionSectionSpan}>О нас</span>
        <ul className={styles.footerUl}>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
      </section>
      <section>
        <span className={styles.descriptionSectionSpan}>Партнёры</span>
        <ul className={styles.footerUl}>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
      </section>
      <section>
        <span className={styles.descriptionSectionSpan}>Вакансии</span>
        <ul className={styles.footerUl}>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
      </section>
      <section>
        <span className={styles.descriptionSectionSpan}>Связаться с нами</span>
        <ul className={styles.footerUl}>
          <li>
            <a className={styles.footerLink} href="tel:+375297777777">
              +375 29 767 95 43
            </a>
          </li>
          <li>
            <a className={styles.footerLink} href="mailto:default@gmail.com">
              default@gmail.com
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
