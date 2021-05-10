import classNames from 'classnames';
import { injectPrefixCls } from '../common';
import React from 'react';
import { Icons } from './type';

export interface BaseProps {
  name?: Icons;
  customClass?: string;
  size?: 'large' | 'middle' | 'small';
}

export type IconProps = BaseProps & React.HTMLAttributes<HTMLSpanElement>;

const IIcon: React.ForwardRefRenderFunction<HTMLSpanElement, IconProps> = (
  { name, size = 'middle', customClass, className, ...rest },
  ref,
) => {
  const ClassNames =
    customClass ||
    classNames(className, {
      'nes-icon': true,
      [`${name}`]: name,
      [`is-${size}`]: size,
    });

  const spanClassNames =
    customClass ||
    classNames({
      [injectPrefixCls(size)]: size,
    });

  return (
    <span {...rest} className={spanClassNames} ref={ref}>
      <i className={ClassNames} />
    </span>
  );
};

const Icon = React.forwardRef<HTMLSpanElement, IconProps>(IIcon);

export default Icon;
