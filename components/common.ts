// 和 index.scss 同步
// 提供一个注入前缀的方法

export const prefixCls = 'nes-design';
export const injectPrefixCls = (className: string) => {
  return `${prefixCls}-${className}`;
};
