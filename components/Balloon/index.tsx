import classNames from 'classnames';
import React from 'react';

export type BalloonProps = {
  theme?: 'dark';
  place?: 'left' | 'right';
} & React.HTMLAttributes<HTMLDivElement>;

const IBalloon: React.ForwardRefRenderFunction<HTMLDivElement, BalloonProps> = (
  { className, theme, place, children, ...rest },
  ref,
) => {
  const ClassNames = classNames(className, {
    'nes-balloon': true,
    'is-dark': theme,
    [`from-${place}`]: place,
  });

  return (
    <div {...rest} ref={ref} className={ClassNames}>
      {children}
    </div>
  );
};

const Balloon = React.forwardRef<HTMLDivElement, BalloonProps>(IBalloon);

export default Balloon;
