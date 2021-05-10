import classNames from 'classnames';
import React from 'react';
import { CharacterIcons } from './type';

export interface BaseProps {
  name?: CharacterIcons;
}

export type IconProps = BaseProps & React.HTMLAttributes<HTMLSpanElement>;

const ICharacter: React.ForwardRefRenderFunction<HTMLSpanElement, IconProps> = (
  { name, className, ...rest },
  ref,
) => {
  const ClassNames = classNames(className, {
    [`${name}`]: name,
  });

  return (
    <span {...rest} ref={ref}>
      <i className={ClassNames} />
    </span>
  );
};

const Character = React.forwardRef<HTMLSpanElement, IconProps>(ICharacter);

export default Character;
