import {
    defineConfig,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
  } from 'unocss'
  
  export default defineConfig({
    theme: {
        expand: {
            screens: {
                'print': { 'raw': 'print' },
            }
        }
    },
    presets: [
      presetUno(),
      presetIcons({
        scale: 2,
        warn: true,
      }),
      presetTypography(),
      presetWebFonts({
        fonts: {
          sans: 'DM Sans',
          serif: 'DM Serif Display',
          mono: 'DM Mono',
          cursive: 'cursive'
        },
      }),
    ],
  })