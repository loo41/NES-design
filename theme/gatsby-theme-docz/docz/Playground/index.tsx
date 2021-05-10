import React, { ComponentType, useState } from 'react';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import LiveEditor from './LiveEditor';
import * as BUi from '@components';
import styles from './index.module.scss';

const { Button, Container, Text } = BUi;

const Playground = ({
  code,
  wrapper,
}: {
  code: string;
  wrapper?: ComponentType<string>;
}) => {
  const [editorOpen, setEditorOpen] = useState(false);
  const [codeString, setCodeString] = useState(code);
  const transformCode = () => {
    if (codeString?.startsWith('()') || codeString?.startsWith('class')) {
      return codeString;
    }
    return `<>${codeString}</>`;
  };

  function toggleEditor() {
    setEditorOpen(!editorOpen);
  }

  return (
    <LiveProvider
      code={codeString}
      scope={{
        ...BUi,
        useState,
      }}
      transformCode={transformCode}
    >
      <div className={styles.LiveProviderContainer}>
        <Container round withTitle title={wrapper && <h3>{wrapper}</h3>}>
          <LivePreview className={styles.LivePreview} />
          <Text status="error">
            <LiveError />
          </Text>
          <div className={styles.expand}>
            <Button onClick={() => toggleEditor()}>
              {editorOpen ? 'Code Close' : 'Code Expand'}
            </Button>
          </div>
        </Container>
        {editorOpen && (
          <LiveEditor
            rest={() => setCodeString(code)}
            code={codeString}
            setCodeString={setCodeString}
          />
        )}
      </div>
    </LiveProvider>
  );
};

export default Playground;
