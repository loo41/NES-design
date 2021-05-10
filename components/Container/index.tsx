import React from 'react';
import classNames from 'classnames';
import Div from '../Base/Div';

export interface BaseProps {
  theme?: 'dark';
  title?: React.ReactNode;
  htmlTitle?: string;
  center?: boolean;
  round?: boolean;
}

export type ContainerProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;

const IContainer: React.ForwardRefRenderFunction<HTMLDivElement, ContainerProps> = (
  { children, title, center = false, round = false, theme, className, ...rest },
  ref,
) => {
  const containerClassName = classNames(className, {
    'nes-container': true,
    'with-title': title,
    'is-centered': center,
    'is-dark': theme,
    'is-rounded': round,
  });

  const titleClassName = classNames({
    title: true,
  });

  return (
    <Div className={containerClassName} {...rest} ref={ref}>
      {title && <Div className={titleClassName}>{title}</Div>}
      {children}
    </Div>
  );
};

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(IContainer);

export default Container;
