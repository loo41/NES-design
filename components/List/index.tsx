import classNames from 'classnames';
import React from 'react';

export type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  type?: 'disc' | 'circle';
  children: HTMLLIElement[];
};

const IList: React.ForwardRefRenderFunction<HTMLUListElement, ListProps> = (
  { type = 'disc', className, children, ...rest },
  ref,
) => {
  const ClassNames = classNames(className, {
    'nes-list': true,
    [`is-${type}`]: type,
  });

  return <ul ref={ref} className={ClassNames} {...rest} children={children} />;
};

const List = React.forwardRef<HTMLUListElement, ListProps>(IList);

export default List;
