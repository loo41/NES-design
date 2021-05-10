import React from 'react';

export interface BaseProps {
  theme?: 'dark';
  disabled?: boolean;
  name?: string;
  value?: string[];
}

export interface BaseCheckboxGroupProps extends BaseProps {
  options: string[] | Option[];
  defaultValue?: string[];
  onChange?: (checkedValues: string[]) => void;
}

export interface BaseCheckboxProps extends Omit<BaseProps, 'value'> {
  defaultChecked?: boolean;
  checked?: boolean;
  value?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

export interface Option extends Omit<CheckboxProps, 'value'> {
  label: React.ReactNode;
  value: string;
  labelProps?: React.HTMLAttributes<HTMLLabelElement>;
}

export type CheckboxProps = BaseCheckboxProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export type CheckboxGroupProps = BaseCheckboxGroupProps &
  React.HTMLAttributes<HTMLDivElement>;
