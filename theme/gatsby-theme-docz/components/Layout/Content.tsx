import React, { useCallback, useState } from 'react';
import { Icon, Balloon, Text } from '@components';
import styles from './index.module.scss';
const { warehouse } = require('@root/package.json');

const ContentWrapper: React.FC<{}> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const ref = useCallback((node: HTMLDivElement) => {
    if (node) {
      let opacity = 0;
      window.addEventListener(
        'scroll',
        event => {
          const { scrollTop = 0 } = event?.target as HTMLInputElement;
          if (scrollTop < 0 && opacity !== 0) {
            opacity = 0;
          } else if (scrollTop > 100 && opacity !== 1) {
            opacity = 1;
          } else {
            opacity = Math.floor(scrollTop) / 100;
          }

          node.style.opacity = String(opacity);
          node.style.cssText = `opacity: ${String(
            opacity,
          )}; box-shadow: 1px 1px 5px rgba(0, 0, 0, ${opacity})`;
        },
        true,
      );
    }
  }, []);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.content}>
        <div className={styles.contentHeader} ref={ref} />
        <div>
          {children}
          <div className={styles.contentBottom}></div>
        </div>
      </div>
      <div className={styles.footerGithub}>
        <Icon
          customClass="nes-octocat animate"
          onMouseMove={() => !visible && setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          onClick={() => window.open(warehouse)}
        />
        {visible && (
          <Balloon place="left" className={styles.balloon}>
            <Text status="error">Github Follow Me</Text>
          </Balloon>
        )}
      </div>
    </div>
  );
};

export default ContentWrapper;
