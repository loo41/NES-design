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
        des: 'container theme / 容器主题',
        type: "'dark'",
        default: '-',
      },
      {
        arg: 'title',
        des: 'container top title',
        type: 'React.ReactNode',
        default: '-',
      },
      {
        arg: 'htmlTitle',
        des: 'div tag html title',
        type: 'string',
        default: '-',
      },
      {
        arg: 'center',
        des: 'container title/content center',
        type: 'boolean',
        default: '-',
      },
      {
        arg: 'round',
        des: 'container shape / 容器形状',
        type: 'boolean',
        default: '-',
      },
      {
        arg: '...rest',
        des: 'more attrs',
        type: 'React.HTMLAttributes<HTMLDivElement>',
        default: '-',
      },
    ],
    footer: 'Container',
  },
};
