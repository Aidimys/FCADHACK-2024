import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from 'react-icons/hi2';

import { selectorBreadLocation } from '../../redux/slices/breadLocationSlice';
import styles from './BreadSection.module.css';

const BreadSection = () => {
  const breadLocation = useSelector(selectorBreadLocation);
  return (
    <section className={styles.section}>
      {breadLocation.map((itemMap, indexMap) => (
        <>
          <Link
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
            {itemMap === '' ? 'Home' : `${itemMap}`}
          </Link>
          {indexMap === breadLocation.length - 1 ? (
            false
          ) : (
            <HiArrowLongRight className={styles.arrows} />
          )}
        </>
      ))}
    </section>
  );
};

export default BreadSection;
