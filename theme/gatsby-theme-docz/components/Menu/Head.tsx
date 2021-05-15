import React from 'react';
import { Input, Icon } from '@components';
import styles from './index.module.scss';
import doczSet from '@root/doczrc.js';
const { name } = require('@root/package.json');

const Head: React.FC<{ setFilterText: (text: string) => void }> = ({
  setFilterText,
}) => {
  return (
    <div className={styles.headWrapper}>
      <div className={styles.header}>
        <div onClick={() => window.open(`${doczSet.base}`, '_self')}>
          {name.split('-')[0].toUpperCase()}-{name.split('-')[1]}
        </div>
        <div>
          <Icon customClass="nes-logo" />
        </div>
      </div>
      <Input
        theme="dark"
        placeholder="Filter Menu"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterText(e.target.value)
        }
      />
    </div>
  );
};

export default Head;
