import classNames from 'classnames';
import React from 'react';

export interface BaseProps {
  value: number;
  max: number;
  type?: 'primary' | 'success' | 'warning' | 'error' | 'pattern';
}

export type ProgressProps = BaseProps & React.HTMLAttributes<HTMLProgressElement>;

const IProgress: React.ForwardRefRenderFunction<
  HTMLProgressElement,
  ProgressProps
> = ({ type, className, ...rest }, ref) => {
  const ClassNames = classNames(className, {
    'nes-progress': true,
    [`is-${type}`]: type,
  });

  return <progress {...rest} className={ClassNames} ref={ref} />;
};

const Progress = React.forwardRef<HTMLProgressElement, ProgressProps>(IProgress);

export default Progress;
