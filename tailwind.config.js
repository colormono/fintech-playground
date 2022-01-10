module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{md,mdx}',
    // Puge content from external packages
    // '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        neutral: {
          50: '#f9fafb',
          100: '#f4f5f7',
          200: '#e5e7eb',
          300: '#d5d6d7',
          400: '#9e9e9e',
          500: '#707275',
          600: '#4c4f52',
          700: '#24262d',
          800: '#1a1c23',
          900: '#121317',
        },
        primary: {
          50: '#f9fafb',
          100: '#EBECF7',
          200: '#D7D8EF',
          300: '#B0B2DF',
          400: '#4D51B8',
          500: '#393EB0',
          600: '#343A98',
          700: '#2E3488',
          800: '#282D76',
          900: '#1D2055',
        },
        secondary: {
          50: '#f9fafb',
          100: '#EBECF7',
          200: '#D7D8EF',
          300: '#B0B2DF',
          400: '#4D51B8',
          500: '#393EB0',
          600: '#343A98',
          700: '#2E3488',
          800: '#282D76',
          900: '#1D2055',
        },
        info: {
          100: '#e1effe',
          300: '#a4cafe',
          500: '#3f83f8',
          700: '#1a56db',
        },
        success: {
          100: '#def7ec',
          300: '#84e1bc',
          500: '#0e9f6e',
          700: '#046c4e',
        },
        warning: {
          100: '#fdf6b2',
          300: '#faca15',
          500: '#c27803',
          700: '#8e4b10',
        },
        error: {
          100: '#fde8e8',
          300: '#f8b4b4',
          500: '#f05252',
          700: '#c81e1e',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
