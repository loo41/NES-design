export type Option = {
  label: React.ReactNode;
  value: string;
  twinkleDelay?: number | boolean;
  labelProps?: React.HTMLAttributes<HTMLLabelElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export interface BaseProps {
  theme?: 'dark';
  value?: string;
  disabled?: boolean;
  name?: string;
  twinkleDelay?: number | boolean;
}

export interface BaseRadioGroupProps extends BaseProps {
  options: Option[];
  defaultValue?: string;
  onChange?: (checkValue: string) => void;
}

export interface BaseRadioProps extends BaseProps {
  checked?: boolean;
  defaultChecked?: boolean;
  labelProps?: React.HTMLAttributes<HTMLLabelElement>;
}

export type RadioProps = BaseRadioProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export type RadioGroupProps = BaseRadioGroupProps &
  React.HTMLAttributes<HTMLDivElement>;
