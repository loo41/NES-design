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
        arg: 'type',
        des: 'button type / 按钮类型',
        type: "'primary' | 'text'",
        default: 'primary',
      },
      {
        arg: 'htmlType',
        des: 'input type / 按钮原生的类型',
        type: "'submit' | 'reset' | 'button'",
        default: '-',
      },
      {
        arg: 'status',
        des: 'button status / 按钮的状态',
        type: "'primary' | 'success' | 'warning' | 'error' | 'disabled'",
        default: '-',
      },
      { arg: 'block', des: 'fill width / 宽度占满', type: 'boolean', default: '-' },
      {
        arg: '...rest',
        des: 'more attrs(Example: onClick) / 更多属性（Example: onClick)',
        type:
          'React.ButtonHTMLAttributes<HTMLButtonElement> | React.HTMLAttributes<HTMLSpanElement>',
        default: '-',
      },
    ],
    footer: 'Button',
  },
};
