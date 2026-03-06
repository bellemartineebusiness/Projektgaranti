import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B23A48',
        'primary-dark': '#8B2D39',
        'primary-light': '#C4545F',
        secondary: '#666666',
        'dark-bg': '#1a1a1a',
        'card-bg': '#f8f8f8',
      },
    },
  },
  plugins: [],
}
export default config
