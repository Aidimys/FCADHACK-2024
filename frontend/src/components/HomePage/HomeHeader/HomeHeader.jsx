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
        <section className={styles.firstPartSection}>
          <img src={logo} alt="MainLogo" className={styles.logo} />
        </section>
        <section className={styles.firstPartSection}>
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
