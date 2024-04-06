import { useSelector, useDispatch } from 'react-redux';

import styles from './HomeMain.module.css';
import ActivityCard from './ActivityCard/ActivityCard';
import { selectorActivityList } from '../../../redux/slices/activityListSlice';

const HomeMain = () => {
  const dispatch = useDispatch();
  const activityList = useSelector(selectorActivityList);
  return (
    <main>
      {activityList.map(item => (
        <ActivityCard key={item.id} {...item} />
      ))}
    </main>
  );
};

export default HomeMain;
