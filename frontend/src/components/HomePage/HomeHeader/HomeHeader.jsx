import { useDispatch } from 'react-redux';
import { FiUser, FiUserPlus } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from './HomeHeader.module.css';
import BreadSection from '../../BreadSection/BreadSection';
import logo from '../../img/logo.png';

const HomeHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthorized = false;
  console.log(logo);
  return (
    <header className={styles.header}>
      <article className={styles.headerArticles1}>
        <section className={styles.firstPartSection1}>
          <img src={logo} alt="MainLogo" className={styles.logo} />
          <div className={styles.facultiesDiv}>
            <span className={styles.spanFaculties}>ФКП</span>
            <span className={styles.spanFaculties}>ФИТУ</span>
            <span className={styles.spanFaculties}>ФРЭ</span>
            <span className={styles.spanFaculties}>ФКСиС</span>
            <span className={styles.spanFaculties}>ФИБ</span>
            <span className={styles.spanFaculties}>ИЭФ</span>
          </div>
        </section>
        <section className={styles.firstPartSection2}>
          {isAuthorized ? (
            <FiUser className={styles.accountLogo} />
          ) : (
            <FiUserPlus
              onClick={() =>
                location.pathname === '/account' ? false : navigate('/account')
              }
              className={styles.accountLogo}
            />
          )}
        </section>
      </article>
      <article className={styles.headerArticles2}>
        <BreadSection />
      </article>
    </header>
  );
};

export default HomeHeader;
