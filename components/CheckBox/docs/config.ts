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
      { arg: 'theme', des: 'theme / 主题', type: "'dark'", default: '-' },
      { arg: 'name', des: 'input name', type: 'string', default: '-' },
      {
        arg: 'disabled',
        des: 'disabled choose / 禁止选择',
        type: 'boolean',
        default: '- / false',
      },
    ],
    footer: 'Checkbox / CheckboxGroup',
  },
  checkboxGroup: {
    columns: columns,
    data: [
      {
        arg: 'value',
        des: 'choose values / 选择的值',
        type: 'string[]',
        default: '-',
      },
      {
        arg: 'defaultValue',
        des: 'default values / 默认选中的值',
        type: 'string[]',
        default: '-',
      },
      {
        arg: 'options',
        des: 'checkbox option /单选选项组',
        type: 'Option[]',
        default: '-',
      },
      {
        arg: 'onChange',
        des: 'change callback / 值改变后回调',
        type: '(checkedValues: string[]) => void',
        default: '-',
      },
      {
        arg: '...rest',
        des: 'more attrs(Example: global attr) / 更多属性（举例: 全局属性）',
        type: 'React.HTMLAttributes<HTMLDivElement>',
        default: '-',
      },
    ],
    footer: 'CheckboxGroup',
  },
  checkbox: {
    columns: columns,
    data: [
      {
        arg: 'value',
        des:
          'checkbox input value / Checkbox Input 的 Value，配合 CheckboxGroup 使用',
        type: 'string',
        default: '-',
      },
      {
        arg: 'defaultChecked',
        des: ' default checked / 初始是否选中',
        type: 'boolean',
        default: '-',
      },
      {
        arg: 'onChange',
        des: 'change callback / 值改变后回调',
        type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
        default: '-',
      },
      {
        arg: 'labelProps',
        des: 'box label props /  外层 label 的属性控制',
        type: 'React.HTMLAttributes<HTMLLabelElement>',
        default: '-',
      },
      {
        arg: '...rest',
        des:
          'more attrs(Example: onBlur onFocus) / 更多属性（Example: onBlur | onFocus',
        type: 'React.InputHTMLAttributes<HTMLInputElement>',
        default: '-',
      },
    ],
    footer: 'Checkbox',
  },
  option: {
    columns: columns,
    data: [
      {
        arg: 'label',
        des: 'Checkbox children / 展示的名称',
        type: 'string',
        default: '-',
      },
      {
        arg: '...Checkbox',
        des: 'Checkbox attrs / Checkbox 属性',
        type: 'CheckboxProps',
        default: '-',
      },
    ],
    footer: 'Option',
  },
};
