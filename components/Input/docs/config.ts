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
        arg: 'inputType',
        des: 'input type / 输入框的类型',
        type: "'input' | 'textarea'",
        default: 'input',
      },
      { arg: 'theme', des: 'theme / 输入框的主题', type: "'dark'", default: '-' },
      {
        arg: 'status',
        des: 'input status / 输入框的状态',
        type: "'success' | 'warning' | 'error' | 'disabled'",
        default: '-',
      },
      {
        arg: 'addonBefore',
        des: 'before suffix / 前缀',
        type: 'React.ReactNode',
        default: '-',
      },
      {
        arg: 'addonAfter',
        des: 'after suffix / 后缀',
        type: 'React.ReactNode',
        default: '-',
      },
      { arg: 'disabled', des: 'disabled / 禁止', type: 'boolean', default: '-' },
      {
        arg: 'spanProps',
        des: 'span label props / span 外层容器属性',
        type: 'React.HTMLAttributes<HTMLSpanElement>',
        default: '-',
      },
    ],
    footer: 'Input / Textarea',
  },
  input: {
    columns: columns,
    data: [
      {
        arg: '...rest',
        des: 'more attrs(Example: onChange, onFocus) / 更多属性（Example: onChange)',
        type: 'React.InputHTMLAttributes<HTMLTextAreaElement>',
        default: '-',
      },
    ],
    footer: 'Input',
  },
  textarea: {
    columns: columns,
    data: [
      {
        arg: '...rest',
        des: 'more attrs(Example: onChange, onFocus) / 更多属性（Example: onChange)',
        type: 'React.TextareaHTMLAttributes<HTMLInputElement>',
        default: '-',
      },
    ],
    footer: 'Textarea',
  },
};
