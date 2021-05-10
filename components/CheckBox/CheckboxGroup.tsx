import React from 'react';
import CheckBox from './index';
import Div from '../Base/Div';
import CheckboxContext from './context';
import { CheckboxGroupProps, Option } from './type';

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options = [],
  disabled,
  defaultValue = [],
  value,
  theme,
  name,
  children,
  className,
  onChange,
  ...rest
}) => {
  const _handlerValuesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const checkedValues = [...new Set([...value, e.target.value])];
      onChange?.(checkedValues);
    } else {
      const index = value.indexOf(e.target.value);
      if (index || index === 0) {
        const copyValue = [...value];
        copyValue.splice(index, 1);
        onChange?.(copyValue);
      }
    }
  };

  return (
    <Div onChange={_handlerValuesChange} {...rest}>
      <CheckboxContext
        value={{
          theme,
          disabled,
          name,
          value: value ?? defaultValue,
        }}
      >
        {options.map((option: Option | string) => {
          if (typeof option === 'string') {
            return <CheckBox key={option} value={option} children={option} />;
          } else {
            const { label, value } = option;
            return <CheckBox key={value} children={label} {...option} />;
          }
        })}
        {children}
      </CheckboxContext>
    </Div>
  );
};

export default CheckboxGroup;
