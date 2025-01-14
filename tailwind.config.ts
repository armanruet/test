import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import scrollbar from 'tailwind-scrollbar';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import animate from 'tailwindcss-animate';

export default {
  // ... rest of config
  plugins: [animate, forms, typography(), scrollbar({ nocompatible: true })],
} as const;
