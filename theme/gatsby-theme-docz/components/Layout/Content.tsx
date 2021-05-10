import React, { useCallback, useEffect } from 'react';
import styles from './index.module.scss';

const ContentWrapper: React.FC<{}> = ({ children }) => {
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
    </div>
  );
};

export default ContentWrapper;
