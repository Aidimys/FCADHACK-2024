import { useSelector } from 'react-redux';

import styles from './Students.module.css';
import { selectorStudentsList } from '../../../redux/slices/studentsListSlice';
import SingleStudent from '../SingleStudent/SingleStudent';

const Students = () => {
  const students = useSelector(selectorStudentsList);
  return (
    <main>
      {students.map(item => (
        <SingleStudent key={item.id} {...item} />
      ))}
    </main>
  );
};

export default Students;
