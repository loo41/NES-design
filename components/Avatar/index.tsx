import classNames from 'classnames';
import { injectPrefixCls } from '../common';
import React from 'react';

export interface BaseProps {
  src?: string;
  size?: 'large' | 'medium' | 'small';
  round?: boolean;
  type?: 'rounded';
}

export type AvatarProps = BaseProps & React.HTMLAttributes<HTMLSpanElement>;

const IAvatar: React.ForwardRefRenderFunction<HTMLSpanElement, AvatarProps> = (
  { src, size, round, className, ...rest },
  ref,
) => {
  const ClassNames = classNames(className, {
    'nes-avatar': true,
    'is-rounded': round,
    [injectPrefixCls('avatar')]: true,
    [`is-${size}`]: size,
  });

  return (
    <span {...rest} className={ClassNames} ref={ref}>
      {src && <img src={src} />}
    </span>
  );
};

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(IAvatar);

export default Avatar;
