import classNames from 'classnames';
import React from 'react';

export interface BaseProps {
  status?: 'primary' | 'success' | 'warning' | 'error' | 'disabled';
  tag?: keyof HTMLElementTagNameMap;
}
export type TextProps = BaseProps &
  React.HTMLAttributes<keyof HTMLElementTagNameMap>;

const IText: React.ForwardRefRenderFunction<
  keyof HTMLElementTagNameMap,
  TextProps
> = ({ children, status, tag = 'p', ...rest }, ref) => {
  const ClassNames = classNames(rest.className, {
    'nes-text': true,
    [`is-${status}`]: status,
  });

  rest.className = ClassNames;
  rest['ref'] = ref;

  return React.createElement(tag, { ...rest }, children);
};

const Text = React.forwardRef<keyof HTMLElementTagNameMap, TextProps>(IText);

export default Text;
