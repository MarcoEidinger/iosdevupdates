module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    minHeight: {
      '25vh': '25vh',
      '50vh': '50vh',
      '75vh': '75vh',
      '85vh': '85vh',
      '95vh': '95vh',
    },
    zIndex: {
      'n3': -30,
      'n2': -20,
      'n1': -10,
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      'auto': 'auto',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    themes: [
      'halloween'
    ],
  },
};
