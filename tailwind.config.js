/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}', // 如果使用 app 目录 (Next.js 13+)
  ],
  theme: {
    extend: {
      colors: {
        primary: '#777', // 自定义主色调
        secondary: '#F59E0B',
        accent: '#10B981',
      },
      spacing: {
        128: '32rem', // 自定义间距
        144: '36rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // 更好看的表单样式
    require('@tailwindcss/typography'), // 用于富文本/blog 内容
    require('@tailwindcss/aspect-ratio'), // 控制响应式宽高比
  ],
};
