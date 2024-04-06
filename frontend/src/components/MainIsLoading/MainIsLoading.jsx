import { VscCheck } from 'react-icons/vsc';
import { VscChromeClose } from 'react-icons/vsc';

import styles from './MainIsLoading.module.css';

const MainIsLoading = ({ action, state }) => {
  let loadingItems = [];
  const qItem = 8;
  for (let i = 0; i < qItem; i++) {
    loadingItems.push(
      <li
        style={{
          transform: `rotate(${(360 / qItem) * i}deg)`,
        }}
        key={i}
        className={styles.loadingItem}
      >
        <div></div>
      </li>
    );
  }
  switch (action) {
    case 'waiting':
      return (
        <section className={state ? styles.invisible : styles.sectionLoading}>
          <span>Loading</span>
          <div className={styles.divLoading}>
            <ul>{loadingItems.map(item => item)}</ul>
          </div>
        </section>
      );
    case 'fulfilled':
      return (
        <section className={state ? styles.invisible : styles.sectionLoading}>
          <span>Loading</span>
          <VscCheck className={styles.check} />
        </section>
      );
    case 'rejected':
      return (
        <section className={state ? styles.invisible : styles.sectionLoading}>
          <span>Loading</span>
          <VscChromeClose className={styles.cross} />
        </section>
      );
  }
};

export default MainIsLoading;
