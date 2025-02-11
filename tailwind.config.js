/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}', // 如果使用 app 目录 (Next.js 13+)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
