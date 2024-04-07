import styles from './ActivityCard.module.css';
 
const ActivityCard = ({
  name,
  author,
  description,
  encouragement,
  participants
}) => {return (<section className={styles.card}>
<span className={styles.cardAuthor}>{author}</span>
<div className={styles.cardHeaderDiv}><span className={styles.cardHeader}>{name}</span></div>
<p className={styles.cardDescr}>{description}</p>
<hr></hr>
<p className={styles.cardEncour}>{encouragement}</p>
<span className={styles.cardPartic}>{participants.length}</span>
</section>)}

export default ActivityCard;
