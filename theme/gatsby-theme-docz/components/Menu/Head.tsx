import React, { useState } from 'react';
import { Input, Icon, Balloon, Text } from '@components';
import styles from './index.module.scss';
const { name, warehouse } = require('@root/package.json');

const Head: React.FC<{ setFilterText: (text: string) => void }> = ({
  setFilterText,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.headWrapper}>
      <div className={styles.header}>
        <div>{name.toUpperCase()}</div>
        <div className={styles.headerGithub}>
          <Icon
            customClass="nes-octocat animate"
            onMouseMove={() => !visible && setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onClick={() => window.open(warehouse)}
          />
          {visible && (
            <Balloon theme="dark" place="right" className={styles.balloon}>
              <Text status="error">Github Follow Me</Text>
            </Balloon>
          )}
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
