import React from 'react';
import { Badge, Icon } from '@components';
const { name, version, warehouse } = require('@root/package.json');
import styles from './index.module.scss';

const TagVersion = ({ component }: { component: string }) => {
  return (
    <div className={styles.TagVersion}>
      <Badge
        type="split"
        options={[
          {
            status: 'dark',
            children: 'Npm',
          },
          {
            status: 'primary',
            children: version,
          },
        ]}
      />
      <Badge
        options={[
          {
            status: 'dark',
            children: `@${name}/${component}`,
          },
        ]}
      />
      <Badge
        onClick={() =>
          window.open(`${warehouse}/tree/master/components/${component}`)
        }
        type="icon"
        options={[
          {
            status: 'primary',
            children: <Icon name="github" />,
          },
          {
            status: 'success',
            children: 'View source',
          },
        ]}
      />
    </div>
  );
};

export default TagVersion;
