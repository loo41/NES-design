import classNames from 'classnames';
import React, { useContext } from 'react';
import { CheckboxContext } from './context';
import { CheckboxProps } from './type';

const ICheckbox: React.ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (
  {
    children,
    className,
    checked,
    name,
    theme,
    labelProps,
    disabled = false,
    defaultChecked = false,
    ...rest
  },
  ref,
) => {
  const { value } = rest;
  const context = useContext(CheckboxContext);

  const inputClassNames = classNames(className, {
    'nes-checkbox': true,
    'is-dark': context?.theme || theme,
    'is-disabled': context?.disabled || disabled,
  });

  const isChecked = (): boolean => {
    if (context?.value) {
      return context?.value.includes(value);
    } else if (checked || checked === false) {
      return checked;
    } else {
      return defaultChecked;
    }
  };

  return (
    <label {...labelProps}>
      <input
        {...rest}
        type="checkbox"
        className={inputClassNames}
        ref={ref}
        name={context?.name || name}
        disabled={context?.disabled || disabled}
        checked={isChecked()}
      />
      <span children={children} />
    </label>
  );
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(ICheckbox);

export default Checkbox;
