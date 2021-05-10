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
        arg: 'value',
        des: 'progress value',
        type: 'number',
        default: '-',
      },
      {
        arg: 'max',
        des: 'progress max',
        type: 'number',
        default: '-',
      },
      {
        arg: 'type',
        des: 'progress type',
        type: "'primary' | 'success' | 'warning' | 'error' | 'pattern'",
        default: '-',
      },
      {
        arg: '...rest',
        des: 'more attrs',
        type: 'React.HTMLAttributes<HTMLProgressElement>',
        default: '-',
      },
    ],
    footer: 'Progress',
  },
};
