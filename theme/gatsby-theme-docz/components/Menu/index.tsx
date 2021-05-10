import React, { useState } from 'react';
import Head from './Head';
import Navigation from './Navigation';
import styles from './index.module.scss';

const Menu = () => {
  const [filterText, setFilterText] = useState('');

  return (
    <div className={styles.menuWrapper}>
      <Head setFilterText={setFilterText} />
      <Navigation filterText={filterText} />
    </div>
  );
};

export default Menu;
