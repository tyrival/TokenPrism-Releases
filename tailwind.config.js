export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#12D2AE',
          'teal-bright': '#2EEFD3',
          blue: '#287DFF',
          amber: '#FEA053',
          red: '#FF607E',
        },
        surface: {
          base: '#0a0d14',
          elevated: '#13161f',
          field: '#1a1d28',
        },
        border: {
          subtle: '#1e2230',
        },
        tech: {
          cyan: '#00e5ff',
          teal: '#12D2AE',
          blue: '#448aff',
          purple: '#b388ff',
          green: '#69f0ae',
          orange: '#ffab40',
          red: '#ff5252',
        },
      },
      fontFamily: {
        sans: ['SF Pro Display', 'SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
