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
        arg: 'src',
        des: 'avatar img src attribute / src 属性',
        type: 'string',
        default: '-',
      },
      {
        arg: 'size',
        des: 'avatar size',
        type: "'large' | 'medium' | 'small'",
        default: '-',
      },
      {
        arg: 'round',
        des: 'avatar shape',
        type: 'boolean',
        default: '-',
      },
      {
        arg: '...rest',
        des: 'more attribute',
        type: 'React.HTMLAttributes<HTMLSpanElement>',
        default: '-',
      },
    ],
    footer: 'Avatar',
  },
};
