import classNames from 'classnames';
import React from 'react';

export type Options = {
  value: string;
  label: React.ReactNode;
} & React.HTMLAttributes<HTMLOptionElement>;

export interface BaseProps {
  options?: Options[];
  status?: 'success' | 'warning' | 'error';
  disabled?: boolean;
}

export type SelectProps = BaseProps & React.HTMLAttributes<HTMLSelectElement>;

const ISelect: React.ForwardRefRenderFunction<HTMLDivElement, SelectProps> = (
  { options = [], children, status, disabled, ...rest },
  ref,
) => {
  const ClassNames = classNames({
    'nes-select': true,
    [`is-${status}`]: status,
  });

  return (
    <div className={ClassNames} ref={ref}>
      <select disabled={disabled} {...rest}>
        {options.map(({ value, label, ...rest }) => (
          <option {...rest} value={value} key={value}>
            {label}
          </option>
        ))}
        {children}
      </select>
    </div>
  );
};

const Select = React.forwardRef<HTMLDivElement, SelectProps>(ISelect);

export default Select;
