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
        des: 'badge type',
        type: "'split' | 'icon'",
        default: '-',
      },
      {
        arg: 'options',
        des: 'badge children`s',
        type: 'Option',
        default: '-',
      },
      {
        arg: '...rest',
        des: 'more attrs(Example: href) / 更多属性',
        type: 'React.AnchorHTMLAttributes<HTMLAnchorElement>',
        default: '-',
      },
    ],
    footer: 'Badge',
  },
  options: {
    columns: columns,
    data: [
      {
        arg: 'status',
        des: 'badge status',
        type: "'primary' | 'success' | 'warning' | 'error' | 'dark'",
        default: '-',
      },
      {
        arg: 'children',
        des: 'badge option children',
        type: 'React.ReactNode',
        default: '-',
      },
      {
        arg: '...rest',
        des: 'more attrs(Example: className) / 更多属性',
        type: 'React.HTMLAttributes<HTMLSpanElement>',
        default: '-',
      },
    ],
    footer: 'Option',
  },
};
