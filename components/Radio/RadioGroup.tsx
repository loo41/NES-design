import React from 'react';
import Div from '../Base/Div';
import { RadioGroupProps } from './type';
import RadioProvider from './context';
import Radio from './index';

const IRadioGroup: React.ForwardRefRenderFunction<
  HTMLDivElement,
  RadioGroupProps
> = ({ onChange, children, ...rest }, ref) => {
  const {
    options = [],
    theme,
    disabled,
    twinkleDelay,
    value,
    defaultValue,
    name,
    ...divAttrRest
  } = rest;

  return (
    <Div
      ref={ref}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
      }}
      {...divAttrRest}
    >
      <RadioProvider
        value={{
          value: value ?? defaultValue,
          twinkleDelay,
          disabled,
          name,
          theme,
        }}
      >
        {options.map(({ label, value, ...rest }) => (
          <Radio {...rest} key={value} value={value} children={label} />
        ))}
        {children}
      </RadioProvider>
    </Div>
  );
};

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(IRadioGroup);

export default RadioGroup;
