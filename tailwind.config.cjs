/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      mmd: '877px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        'viu-text': '#333',
        'viu-background': '#fff',
        'viu-primary': '#003B5C',
        'viu-secondary': '#007DBA',
        'viu-accent': '#4c4c4c',
        'viu-accent-high': '#000',
        'viu-highlight': '#ccc',
        'viu-highlight-high': '#e5e5e5',
        'viu-muted': '#f2f2f2',
        'viu-warning': '#F9FB93',
        'viu-error': '#FBE3E4',
        'viu-message': '#CFEFC2',
        white: '#fff',
      },
    },
    fontFamily: {
      display: ['ProximaNova', 'corbel', 'arial', 'sans-serif'],
      body: ['ProximaNova', 'corbel', 'arial', 'sans-serif'],
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
