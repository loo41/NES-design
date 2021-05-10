import React from 'react';

export interface BaseProps<T = HTMLFormElement> {
  htmlTitle?: string;
  onChange?: React.FormEventHandler<T>;
}

export type DivProps<T> = BaseProps<T> & React.HTMLAttributes<HTMLDivElement>;

function IDiv<T>(
  { children, htmlTitle, ...rest }: DivProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <div title={htmlTitle} {...rest} ref={ref}>
      {children}
    </div>
  );
}

const Div = React.forwardRef<HTMLDivElement, DivProps<unknown>>(IDiv);

export default Div;
