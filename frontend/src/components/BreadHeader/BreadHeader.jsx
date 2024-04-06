import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { setbreadLocation } from '../../redux/slices/breadLocationSlice';
import styles from './BreadHeader.module.css';
import BreadSection from '../BreadSection/BreadSection';

const BreadHeader = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setbreadLocation(location.pathname));
  }, []);

  return (
    <header className={styles.header}>
      <BreadSection />
    </header>
  );
};

export default BreadHeader;
