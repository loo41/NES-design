import Button, { ButtonProps } from '../Button';
import React, { useCallback, useRef } from 'react';
import classNames from 'classnames';
import { injectPrefixCls } from '../common';

export interface BaseProps {
  visible: boolean;
  width?: number;
  cancelProps?: ButtonProps;
  okProps?: ButtonProps;
  theme?: 'dark';
  round?: boolean;
  renderFooter?: (dialog: HTMLDialogElement) => React.ReactNode;
  children?: (dialog: HTMLDialogElement) => React.ReactNode;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onOk?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export type ModalProps = BaseProps & React.DialogHTMLAttributes<HTMLDialogElement>;

const Modal: React.FC<ModalProps> = ({ children, style, className, ...args }) => {
  const dialogRef = useRef<HTMLDialogElement>();

  const {
    theme,
    round,
    onCancel,
    onOk,
    renderFooter,
    okProps,
    cancelProps,
    width = 520,
    visible,
    ...rest
  } = args;

  const ref = useCallback(
    (node: HTMLDialogElement) => {
      if (!node) return;
      dialogRef.current = node;
      if (visible && !node.open) {
        node.showModal();
      }
      if (!visible && node.open) {
        node.close();
      }
    },
    [visible],
  );

  const footer = () => {
    const Classnames = classNames({
      'dialog-menu': true,
      [injectPrefixCls('dialog-footer')]: true,
    });

    const cancel = {
      children: 'Cancel',
      ...cancelProps,
    };

    const confirm = {
      children: 'Confirm',
      status: 'primary' as 'primary',
      ...okProps,
    };

    return (
      <div className={Classnames}>
        <Button {...cancel} onClick={onCancel} />
        <Button {...confirm} onClick={onOk} />
      </div>
    );
  };

  const ClassNames = classNames(className, {
    'nes-dialog': true,
    'is-dark': theme,
    'is-rounded': round,
  });

  const Styles = {
    width,
    ...style,
  };

  return (
    <dialog {...rest} ref={ref} className={ClassNames} style={Styles}>
      {children?.(dialogRef.current)}
      {renderFooter?.(dialogRef.current) || footer()}
    </dialog>
  );
};

export default Modal;
