import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import styles from './HomeHeader.module.css';
import { setbreadLocation } from '../../../redux/slices/breadLocationSlice';

const HomeHeader = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setbreadLocation(location.pathname));
  }, [location.pathname]);

  return (
    <header className={styles.first}>
      <section></section>
      <section></section>
    </header>
  );
};

export default HomeHeader;
