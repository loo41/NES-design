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
        arg: 'icon',
        des: 'Rate icon / icon',
        type: 'Icons',
        default: 'star',
      },
      {
        arg: 'allowClear',
        des:
          'continue to change after the state change / 状态改变后是否还能继续改变',
        type: 'boolean',
        default: 'true',
      },
      {
        arg: 'allowHalf',
        des: 'is support half / 是否支持半选',
        type: 'boolean',
        default: 'true',
      },
      { arg: 'count', des: 'rate count / 评星的数量', type: 'number', default: '5' },
      {
        arg: 'defaultValue',
        des: 'rate defaultValue / 默认选中的值',
        type: 'number',
        default: '-',
      },
      {
        arg: 'disabled',
        des: 'disabled',
        type: 'boolean',
        default: '-',
      },
      { arg: 'value', des: 'rate value / 评星的值', type: 'number', default: '-' },
      {
        arg: 'emptyType',
        des: 'empty status type / 未选中情况下未选中的样式类型',
        type: "'transparent' | 'normal'",
        default: 'transparent',
      },
      {
        arg: 'onHoverChange',
        des: 'hover change callback / hover 改变的回调',
        type: '(value: number) => void;',
        default: '-',
      },
      {
        arg: 'onChange',
        des: 'click change callback  / click 改变的回调',
        type: '(value: number) => void;',
        default: '-',
      },
      {
        arg: '...rest',
        des: 'more attrs / 更多属性',
        type: 'React.HTMLAttributes<HTMLElement>',
        default: '-',
      },
    ],
    footer: 'Rate',
  },
};
