import classNames from 'classnames';
import { injectPrefixCls } from '../common';
import React, { useRef, useContext } from 'react';
import { RadioContext } from './context';
import { RadioProps } from './type';

const Radio: React.FC<RadioProps> = ({
  value,
  checked,
  className,
  children,
  onChange,
  labelProps,
  name,
  defaultChecked = false,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>();

  const { theme, disabled, twinkleDelay = 2000, ...inputAttrRest } = rest;

  const context = useContext(RadioContext);

  const ClassNames = classNames(className, {
    [injectPrefixCls('radio')]: true,
  });

  const inputClassNames = classNames({
    'nes-radio': true,
    'is-dark': context?.theme || theme,
    'is-disabled': context?.disabled || disabled,
  });

  const isChecked = (): boolean => {
    if (context?.value || context?.value === '') {
      return context?.value === value;
    } else if (checked || checked === false) {
      return checked;
    } else {
      return defaultChecked;
    }
  };

  return (
    <label {...labelProps} className={ClassNames}>
      <input
        {...inputAttrRest}
        value={value}
        name={context?.name || name}
        type="radio"
        ref={inputRef}
        disabled={context?.disabled || disabled}
        className={inputClassNames}
        checked={isChecked()}
        onChange={e => {
          const delayed = context?.twinkleDelay || twinkleDelay;
          if (typeof delayed === 'boolean') {
            delayed ? null : inputRef.current?.blur();
          } else {
            setTimeout(() => inputRef.current?.blur(), delayed);
          }
          onChange?.(e);
        }}
      />
      <span>{children}</span>
    </label>
  );
};

export default Radio;
