import classNames from 'classnames';
import { injectPrefixCls } from '../common';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Icons } from '../Icon/type';
import Icon from '../Icon';
import { getStarValue } from './util';
import { useCacheHook } from './useCacheHook';

const EmptyType = {
  transparent: 'empty',
  normal: 'transparent',
};

export type Status = 'transparent' | 'empty' | 'half';

export interface BaseProps {
  icon?: Icons;
  allowClear?: boolean;
  allowHalf?: boolean;
  count?: number;
  defaultValue?: number;
  disabled?: boolean;
  value?: number;
  emptyType?: 'transparent' | 'normal';
  onHoverChange?: (value: number) => void;
  onChange?: (value: number) => void;
}

export type RateProps = BaseProps & React.HTMLAttributes<HTMLElement>;

const DEFAULT_COUNT = 5;
const DEFAULT_ALLOW_HALF_ICON = ['star', 'heart'];
const IRate: React.ForwardRefRenderFunction<HTMLElement, RateProps> = (
  {
    count = DEFAULT_COUNT,
    allowHalf = true,
    allowClear = true,
    defaultValue,
    disabled,
    emptyType = 'transparent',
    onHoverChange,
    onChange,
    icon = 'star',
    value,
    ...rest
  },
  ref,
) => {
  const initValue = value ?? defaultValue ?? 0;
  const [reteValue, setReteValue] = useState(initValue);
  const [isClear, setIsClear] = useState(true);

  useCacheHook(() => {
    if (!allowClear) {
      setIsClear(false);
    }
  }, value);

  useEffect(() => {
    if (initValue !== reteValue) {
      setReteValue(initValue);
    }
  }, [value, defaultValue]);

  const reteRefs = new Array(count).fill(0).map(() => useRef<HTMLElement>());
  const canChange = isClear || allowClear;

  const isSupportHalf = useMemo(
    () => DEFAULT_ALLOW_HALF_ICON.includes(icon) && allowHalf,
    [icon, allowHalf],
  );

  const getStatus = (index: number) => {
    const isHalf = () => index + 0.5 === reteValue;
    const getEmptyType = () => (isHalf() ? 'half' : EmptyType[emptyType]);
    return reteValue >= index + 1 ? undefined : getEmptyType();
  };

  const onHover = (e: React.MouseEvent<HTMLElement, MouseEvent>, index: number) => {
    const hoverValue = getStarValue(index, e.pageX, {
      allowHalf: isSupportHalf,
      reteRefs,
    });
    setReteValue(hoverValue);
    onHoverChange?.(hoverValue);
  };

  const onMouseLeave = () => {
    setReteValue(initValue);
  };

  const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, index: number) => {
    const hoverValue = getStarValue(index, e.pageX, {
      allowHalf: isSupportHalf,
      reteRefs,
    });
    onChange?.(hoverValue);
  };

  return (
    <section {...rest} ref={ref}>
      {new Array(count).fill(0).map((_, index) => {
        const status = getStatus(index);
        return (
          <RateItem
            status={status as Status}
            icon={icon}
            ref={reteRefs[index]}
            disabled={!canChange || disabled}
            onMouseMove={e => onHover(e, index)}
            onMouseLeave={onMouseLeave}
            onClick={e => onClick(e, index)}
          />
        );
      })}
    </section>
  );
};

export interface RateItemProps {
  status?: Status;
  icon?: Icons;
  disabled?: boolean;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onMouseMove?: React.MouseEventHandler<HTMLElement>;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const RateItem = React.forwardRef<HTMLElement, RateItemProps>(
  ({ status, icon, disabled, onMouseMove, onMouseLeave, onClick }, ref) => {
    const ClassNames = classNames({
      'nes-icon': true,
      [`is-${status}`]: status,
      [icon]: icon,
      [injectPrefixCls('is-disabled-cursor')]: disabled,
    });

    return (
      <Icon
        ref={ref}
        onMouseLeave={!disabled && onMouseLeave}
        onMouseMove={!disabled && onMouseMove}
        onClick={!disabled && onClick}
        className={ClassNames}
      />
    );
  },
);

const Rate = React.forwardRef<HTMLElement, RateProps>(IRate);

export default Rate;
