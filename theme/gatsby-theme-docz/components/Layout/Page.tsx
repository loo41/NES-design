import React from 'react';

const ContentWrapper: React.FC<{}> = ({ children }) => {
  return <div style={{ display: 'flex', minHeight: '100%' }}>{children}</div>;
};

export default ContentWrapper;
