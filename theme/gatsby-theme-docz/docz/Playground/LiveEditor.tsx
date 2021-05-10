import React, { useState, useRef } from 'react';
import { LiveEditor } from 'react-live';
import styles from './index.module.scss';

const DEFAULT_TIMER = 5000;
const Editor = ({
  code,
  setCodeString,
  rest,
}: {
  code: string;
  setCodeString: (code: string) => void;
  rest: () => void;
}) => {
  const [copyText, setCopyText] = useState('Copy');
  const textareaRef = useRef(null);

  const copy = () => {
    textareaRef.current.value = code;
    textareaRef.current.select();
    document.execCommand('Copy');
    setCopyText('Copied');
    setTimeout(() => {
      setCopyText('Copy');
    }, DEFAULT_TIMER);
  };

  return (
    <div className={styles.LivePreViewWarper}>
      <LiveEditor
        onChange={(code: string) => setCodeString(code)}
        className={styles.liveEditor}
      />
      <div className={styles.copy} onClick={() => copy()}>
        {copyText}
      </div>
      <div className={styles.rest} onClick={() => rest()}>
        Reset
      </div>
      <textarea className={styles.textarea} ref={textareaRef} />
    </div>
  );
};

export default Editor;
