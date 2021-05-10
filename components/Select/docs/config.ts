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
        arg: 'options',
        des: 'select options / 选择框选项',
        type: 'Option',
        default: '[ ]',
      },
      {
        arg: 'status',
        des: 'status / 选择框状态',
        type: "'success' | 'warning' | 'error'",
        default: '-',
      },
      {
        arg: 'disabled',
        des: 'disabled / 禁止选择',
        type: 'boolean',
        default: '-',
      },
      {
        arg: '...rest',
        des: 'more attrs(Example: onChange) / 更多属性（Example: onChange)',
        type: 'React.HTMLAttributes<HTMLSelectElement>',
        default: '-',
      },
    ],
    footer: 'Select',
  },
  option: {
    columns: columns,
    data: [
      {
        arg: 'value',
        des: 'select option value / 选择框选项值',
        type: 'string',
        default: '-',
      },
      {
        arg: 'label',
        des: 'select option children / 选择框选项展示的内容',
        type: 'React.ReactNode',
        default: '-',
      },
      {
        arg: '...rest',
        des: 'more attrs / 更多属性',
        type: 'React.HTMLAttributes<HTMLOptionElement>',
        default: '-',
      },
    ],
    footer: 'Select',
  },
};
