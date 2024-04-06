import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import {
  selectorBreadLocation,
  setbreadLocation,
} from '../../redux/slices/breadLocationSlice';
import styles from './BreadHeader.module.css';

const BreadHeader = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setbreadLocation(location.pathname));
  }, [location.pathname]);
  const breadLocation = useSelector(selectorBreadLocation);

  return (
    <header>
      <div>
        {breadLocation.map((itemMap, indexMap) => (
          <Link
            // style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
            key={itemMap}
            to={breadLocation.reduce(
              (accumulate, itemReduce, indexReduce) =>
                indexReduce <= indexMap
                  ? indexReduce === 1
                    ? (accumulate += itemReduce)
                    : (accumulate += `/${itemReduce}`)
                  : (accumulate += ''),
              ''
            )}
            className={styles.breadLink}
          >
            {itemMap === '' ? 'Главная' : `→ ${itemMap}`}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default BreadHeader;
