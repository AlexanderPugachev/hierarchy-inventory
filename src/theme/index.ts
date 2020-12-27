type spacingType = (arr: number[], multiplier?: number) => string;

const spacing: spacingType = (arr, multiplier = 4) => arr
  .reduce((res, el) => `${res}${el * multiplier}px `, '');

export const mainTheme = {
  spacing,

  spaces: {
    xxs: spacing([.5]),
    xs: spacing([1]),
    s: spacing([2]),
    m: spacing([3]),
    l: spacing([4]),
    xl: spacing([5]),
    xxl: spacing([6]),
  },

  zIndex: {
    bg: 0,
    main: 100,
    drawersWrap: 190,
    drawers: 200,
  },
};