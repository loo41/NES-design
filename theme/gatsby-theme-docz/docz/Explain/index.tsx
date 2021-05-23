import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import Highlight from 'react-highlight';
import classNames from 'classnames';
const { name } = require('@root/package.json');

declare const window: {
  clipboardData: {
    setData: (command: 'Text', text: string) => void;
  };
};

const DEFAULT_TIMER = 5000;
const Copy = 'Copy';
const Copied = 'Copied!';

const Explain: React.FC<{
  component: string;
  code?: string;
  isCopyable: boolean;
  language?: string;
  auto?: boolean;
}> = ({ component, code, isCopyable, auto, language = 'react' }) => {
  const [copyText, setCopyText] = useState(Copy);
  const textareaRef = useRef(null);

  const text =
    code ||
    `import ${component} from '${name}/es/${component}';   OR   import { ${component} } from '${name}';`;

  const copy = () => {
    if (document.execCommand) {
      textareaRef.current.value = text;
      textareaRef.current.select();
      document.execCommand('Copy');
    } else {
      window.clipboardData.setData('Text', text);
    }
    setCopyText(Copied);
    setTimeout(() => {
      setCopyText(Copy);
    }, DEFAULT_TIMER);
  };

  const CopyClassNames = classNames({
    [styles.copy]: true,
    [copyText === Copy ? styles.isCopy : styles.isCopied]: true,
  });

  const style =
    auto && ({ height: 'auto', position: 'relative' } as React.CSSProperties);

  return (
    <div className={styles.container} style={style}>
      <Highlight language={language}>{code || text}</Highlight>
      {isCopyable && (
        <div className={CopyClassNames} onClick={() => copy()}>
          {copyText}
        </div>
      )}
      <textarea className={styles.textarea} ref={textareaRef} />
    </div>
  );
};

export default Explain;
