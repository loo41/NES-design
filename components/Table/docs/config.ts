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
        arg: 'theme',
        des: 'table theme',
        type: "'dark'",
        default: '-',
      },
      {
        arg: 'bordered',
        des: 'table border',
        type: 'boolean',
        default: 'true',
      },
      {
        arg: '...rest',
        des: 'more attrs',
        type: 'rc-table/TableProps',
        default: '-',
      },
    ],
    footer: 'Table',
  },
};
