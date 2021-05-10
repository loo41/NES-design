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
        des: 'list type / 列表的类型',
        type: "'disc' | 'circle'",
        default: 'disc',
      },
      {
        arg: 'children',
        des: 'list ul > li children / 列表',
        type: 'HTMLLIElement[]',
        default: '-',
      },
    ],
    footer: 'List',
  },
};
