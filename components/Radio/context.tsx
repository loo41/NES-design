import React, { createContext } from 'react';
import { BaseProps } from './type';

const defaultValue: BaseProps = {};

export const RadioContext = createContext(defaultValue);

const RadioProvider: React.FC<{ value?: BaseProps }> = ({
  children,
  value = {},
}) => {
  return <RadioContext.Provider value={value}>{children}</RadioContext.Provider>;
};

export default RadioProvider;
