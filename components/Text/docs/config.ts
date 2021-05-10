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
        arg: 'tag',
        des: 'text custom tag / 自定义标签',
        type: 'keyof HTMLElementTagNameMap',
        default: 'p',
      },
      {
        arg: 'status',
        des: 'text status',
        type: "'primary' | 'success' | 'warning' | 'error' | 'disabled'",
        default: '-',
      },
      {
        arg: '...rest',
        des: 'more attrs',
        type: 'React.HTMLAttributes<keyof HTMLElementTagNameMap>',
        default: '-',
      },
    ],
    footer: 'Text',
  },
};
