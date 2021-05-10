import React from 'react';
import RcTable from 'rc-table';
import classNames from 'classnames';
import { prefixCls, injectPrefixCls } from '../common';
import { TableProps } from 'rc-table/lib/Table';

export interface BaseProps {
  theme?: 'dark';
  bordered?: boolean;
}

const Table: React.FC<Omit<TableProps<{}>, 'prefixCls'> & BaseProps> = ({
  className,
  ...args
}) => {
  const { theme, bordered = true, ...rest } = args;

  const ClassNames = classNames(className, {
    'nes-table': true,
    'is-bordered': bordered,
    'is-dark': theme,
    [injectPrefixCls('table')]: true,
    [injectPrefixCls('table-theme-dark')]: true,
    [injectPrefixCls('patch-td-border-width')]: true,
  });

  return <RcTable {...rest} prefixCls={prefixCls} className={ClassNames} />;
};

export default Table;
