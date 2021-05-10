const columns = [
  { title: 'Prop / 参数', dataIndex: 'arg', key: 'arg' },
  { title: 'Description / 描述', dataIndex: 'des', key: 'des' },
  { title: 'Type / 类型', dataIndex: 'type', key: 'type' },
  { title: 'Default / 默认值', dataIndex: 'default', key: 'default' },
];

export const Props = {
  icon: {
    columns: columns,
    data: [
      {
        arg: 'name',
        des: 'icon name / icon 的名称',
        type: 'Icons',
        default: '-',
      },
      {
        arg: 'size',
        des: 'icon size / icon 的尺寸',
        type: "'large' | 'middle' | 'small'",
        default: 'middle',
      },
      {
        arg: 'customClass',
        des: 'custom Icon class / 自定义 icon 类',
        type: 'string',
        default: '-',
      },
      {
        arg: 'className',
        des: 'icon className / icon className',
        type: 'string',
        default: '-',
      },
    ],
    footer: 'Icon',
  },
  character: {
    columns: columns,
    data: [
      {
        arg: 'name',
        des: 'icon name / icon 的名称',
        type:
          "'nes-mario' | 'nes-ash' | 'nes-pokeball' | 'nes-bulbasaur' | 'nes-charmander' | 'nes-squirtle'| 'nes-kirby'",
        default: '-',
      },
    ],
    footer: 'character',
  },
  icons: {
    columns: columns,
    data: [
      {
        arg: 'Icons',
        des: 'icon name collect',
        type:
          "'twitter' | 'facebook' | 'instagram' | 'github' | 'google' | 'gmail' | 'medium' | 'linkedin' | 'twitch' | 'youtube' | 'reddit' | 'whatsapp' | 'close' | 'trophy' | 'coin' | 'star' | 'heart' | 'like'",
        default: '-',
      },
    ],
    footer: 'Icons',
  },
};
