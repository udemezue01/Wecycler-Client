const { colors } = require('tailwindcss/defaultTheme')


module.exports = {
  theme: {
    extend: {
    	 colors: {
        purple: {
          ...colors.purple,
          '100': '#8043a2',
        },
        green:{
        	...colors.green,
        	'100':'#71bc1f',
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
