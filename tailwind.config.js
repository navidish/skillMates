/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ['./index.html', './src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1038px',
    },
    extend: {
      fontFamily: {
        sans: ['iranSans'],
      },
      colors: {
        primary: {
          900: withOpacity('--color-primary-900'),
          800: withOpacity('--color-primary-800'),
          700: withOpacity('--color-primary-700'),
          600: withOpacity('--color-primary-600'),
          500: withOpacity('--color-primary-500'),
          400: withOpacity('--color-primary-400'),
          300: withOpacity('--color-primary-300'),
          200: withOpacity('--color-primary-200'),
          100: withOpacity('--color-primary-100'),
        },
        secondary: {
          900: withOpacity('--color-secondary-900'),
          800: withOpacity('--color-secondary-800'),
          700: withOpacity('--color-secondary-700'),
          600: withOpacity('--color-secondary-600'),
          500: withOpacity('--color-secondary-500'),
          400: withOpacity('--color-secondary-400'),
          300: withOpacity('--color-secondary-300'),
          200: withOpacity('--color-secondary-200'),
          100: withOpacity('--color-secondary-100'),
          50: withOpacity('--color-secondary-50'),
          0: withOpacity('--color-secondary-0'),
        },
        success: withOpacity('--color-success'),
        warning: withOpacity('--color-warning'),
        error: withOpacity('--color-error'),
      },

      backgroundImage: {
        banner: "url('/src/assets/images/home/banner/bg.png')",
        faq: "url('/src/assets/images/home/faq/bg.svg')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        custom: '95%',
      },
    },
  },
  plugins: [],
};
