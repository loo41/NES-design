import React from 'react';
import classNames from 'classnames';
import { injectPrefixCls } from '../common';

export interface BaseProps {
  type?: 'primary' | 'text';
  htmlType?: 'submit' | 'reset' | 'button';
  status?: 'primary' | 'success' | 'warning' | 'error' | 'disabled';
  block?: boolean;
}

export type ButtonProps = BaseProps &
  (
    | React.ButtonHTMLAttributes<HTMLButtonElement>
    | React.HTMLAttributes<HTMLSpanElement>
  );

const IButton: React.ForwardRefRenderFunction<
  HTMLButtonElement | HTMLSpanElement,
  ButtonProps
> = ({ type = 'primary', htmlType, status, className, block, ...rest }, ref) => {
  const ClassNames = classNames(className, {
    'nes-btn': type === 'primary',
    'nes-text': type === 'text',
    [`is-${status}`]: status,
    [injectPrefixCls('button-block')]: block,
    [injectPrefixCls('text-disabled')]: status === 'disabled' && type === 'text',
  });

  if (type === 'primary') {
    return (
      <button
        {...rest}
        className={ClassNames}
        disabled={status === 'disabled'}
        type={htmlType}
        ref={ref as React.Ref<HTMLButtonElement>}
      />
    );
  }
  return <span {...rest} className={ClassNames} ref={ref} />;
};

const Button = React.forwardRef<HTMLButtonElement | HTMLSpanElement, ButtonProps>(
  IButton,
);

export default Button;
