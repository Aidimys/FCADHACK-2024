import styles from './SingleOrganization.module.css';

const SingleOrganization = ({
  name,
  description,
  contacts,
  activityCard
}) => {
  return (
  <div className={styles.SingleOrganization}>
    <span className={styles.singOrganHader}>{name}</span>
    <section className={styles.singOrgInfo}>
        <p className={styles.singOrganDesc}>{description}</p>
        <section className={styles.singOrgContacts}>{contacts}</section>
    </section>
    <span className={styles.singOrgSecHeader}>Наши мероприятия</span>
    <section className={styles.singOrganActiv}>{activityCard}</section>
  </div>
)};

export default SingleOrganization;
