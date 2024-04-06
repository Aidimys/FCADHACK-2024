import styles from './ActivityCard.module.css';

const ActivityCard = () => {
  return <section className='section'>
    <span>{name}</span>
    <p>{description}</p>
    <p>{encouragement}</p>
    <span>{members}</span>
  </section>;
};

export default ActivityCard;
