import { tailwind } from '@theme-ui/presets';

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.blue[9],
  },
  sizes: {
    ...tailwind.sizes,
    container: 1200,
  },
  fonts: {
    ...tailwind.fonts,
    heading: `'Titillium', ${tailwind.fonts.sans}`,
  },
};