const columns = [
  { title: 'Prop / 参数', dataIndex: 'arg', key: 'arg' },
  { title: 'Description / 描述', dataIndex: 'des', key: 'des' },
  { title: 'Type / 类型', dataIndex: 'type', key: 'type' },
  { title: 'Default / 默认值', dataIndex: 'default', key: 'default' },
];

export const Props = {
  public: {
    columns: columns,
    data: [
      {
        arg: 'visible',
        des: 'modal visible',
        type: 'boolean',
        default: '-',
      },
      {
        arg: 'width',
        des: 'modal width',
        type: 'number',
        default: '520',
      },
      {
        arg: 'theme',
        des: 'modal theme',
        type: "'dark'",
        default: '-',
      },
      { arg: 'round', des: 'modal shape', type: 'boolean', default: '-' },
      {
        arg: 'cancelProps',
        des: 'modal footer cancel button props',
        type: 'ButtonProps',
        default: '-',
      },
      {
        arg: 'okProps',
        des: 'modal footer ok button props',
        type: 'ButtonProps',
        default: '-',
      },
      {
        arg: 'onCancel',
        des: 'modal click cancel callback',
        type: '(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;',
        default: '-',
      },
      {
        arg: 'onOk',
        des: 'modal click ok callback',
        type: '(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;',
        default: '-',
      },
      {
        arg: 'renderFooter',
        des: 'custom footer',
        type: '(dialog: HTMLDialogElement) => React.ReactNode;',
        default: '-',
      },
      {
        arg: 'children',
        des: 'custom children',
        type: '(dialog: HTMLDialogElement) => React.ReactNode;',
        default: '-',
      },
      {
        arg: '...rest',
        des: 'more attrs',
        type: 'React.DialogHTMLAttributes<HTMLDialogElement>;',
        default: '-',
      },
    ],
    footer: 'Modal',
  },
};
