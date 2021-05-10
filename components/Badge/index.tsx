import classNames from 'classnames';
import React from 'react';

interface Option extends React.HTMLAttributes<HTMLSpanElement> {
  status: 'primary' | 'success' | 'warning' | 'error' | 'dark';
  key?: string;
}

export interface BaseProps {
  type?: 'split' | 'icon';
  options: Option[];
}

export type BadgeProps = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Badge: React.FC<BadgeProps> = ({
  href,
  type,
  options,
  className,
  ...rest
}) => {
  const ClassNames = classNames(className, {
    'nes-badge': true,
    [`is-${type === 'split' ? 'splited' : type}`]: type,
  });

  return (
    <a {...rest} className={ClassNames}>
      {options.map(({ key, status, className, ...rest }, index) => {
        const spanClassNames = classNames(className, {
          [`is-${status}`]: status,
        });
        return <span {...rest} key={key || index} className={spanClassNames} />;
      })}
    </a>
  );
};

export default Badge;
