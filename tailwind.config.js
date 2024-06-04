/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'glassBg': "url('../public/bg-3d-5.jpg')",
            'spOne': "url('../public/sam/sp-1.png')",
            'spTwo': "url('../public/sam/sp-2.png')",
            'spThree': "url('../public/sam/sp-3.png')",
            'mOne': "url('../public/sam/m-1.png')"
      },
    },
  },
  plugins: [],
}
