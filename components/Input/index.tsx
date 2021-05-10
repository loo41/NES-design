import classNames from 'classnames';
import React from 'react';
import { injectPrefixCls } from '../common';

export interface BaseProps {
  status?: 'success' | 'warning' | 'error' | 'disabled';
  inputType?: 'input' | 'textarea';
  theme?: 'dark';
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  disabled?: boolean;
  spanProps?: React.HTMLAttributes<HTMLSpanElement>;
}

export type InternalProps<T> = BaseProps & T;

const Internal = <T extends HTMLDivElement, P extends InternalProps<Element>>(
  {
    addonBefore,
    addonAfter,
    spanProps,
    disabled,
    className,
    inputType = 'input',
    status,
    theme,
    ...rest
  }: React.PropsWithChildren<P>,
  ref: React.ForwardedRef<T>,
): React.ReactElement | null => {
  const ClassNames = classNames({
    'nes-field': true,
    [injectPrefixCls('inline')]: true,
    [injectPrefixCls('is-disabled')]: disabled,
  });

  const InputClassNames = classNames(className, {
    'nes-input': inputType === 'input',
    'nes-textarea': inputType === 'textarea',
    [`is-${status}`]: status,
    'is-dark': theme,
  });

  const InputNode = () => {
    if (inputType === 'input') {
      return <input {...rest} disabled={disabled} className={InputClassNames} />;
    } else {
      return <textarea {...rest} disabled={disabled} className={InputClassNames} />;
    }
  };

  return (
    <span {...spanProps} ref={ref} className={ClassNames}>
      {addonBefore && <span>{addonBefore}</span>}
      {InputNode()}
      {addonAfter && <span>{addonAfter}</span>}
    </span>
  );
};

const Input = React.forwardRef<
  HTMLDivElement,
  InternalProps<React.TextareaHTMLAttributes<HTMLInputElement>>
>(Internal);

const TextArea = React.forwardRef<
  HTMLDivElement,
  InternalProps<React.InputHTMLAttributes<HTMLTextAreaElement>>
>(Internal);

export { TextArea, Input };

export default Input;
