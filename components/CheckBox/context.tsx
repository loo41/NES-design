import React, { createContext } from 'react';
import { BaseProps } from './type';

const defaultValue: BaseProps = {};

export const CheckboxContext = createContext(defaultValue);

const CheckboxProvider: React.FC<{ value?: BaseProps }> = ({
  children,
  value = {},
}) => {
  return (
    <CheckboxContext.Provider value={value}>{children}</CheckboxContext.Provider>
  );
};

export default CheckboxProvider;
