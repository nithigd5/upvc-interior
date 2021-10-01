module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Poppins: ['Poppins','Graphik', 'sans-serif'],
      
    },
    extend: {
      backgroundColor : ['active'],
      animation: ['motion-safe'],
      ring : ['focus'],
      colors: {
        brown:{
          light:"#B85C38",
          DEFAULT : "#5C3D2E",
          dark : "#2D2424"
        },
        navy:{
          light: "#D4ECDD",
          DEFAULT: '#345B63',
          dark: "#152D35"
        }
      }
    },
    
  },
  variants: {
    extend: {
      transform:['group-hover']
    },
  },
  plugins: [],
}
