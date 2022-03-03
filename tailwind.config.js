module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens :{
        'mobile':'360px',
        'desc':'1020px'
      },
        colors :{
          primary: {
            'bright-orange':"hsl(31, 77%, 52%)",
            'dark-cyan':"hsl(184, 100%, 22%)",
            'v-dark-cyan':"hsl(179, 100%, 13%)",
          },
          neutral: {
            "trans-white":"hsla(0, 0%, 100%, 0.75)", // paragraph
             "v-light-gray":"hsl(0, 0%, 95%)", //stat heading
          }
        },
        fontFamily:{
          "big-sholder" : 'Big Shoulders Display',
          "lexend-deca": 'Lexend Deca'
        },
        fontWeight:{
          reg : '400',
          bold : "700"
        }
    },
  },

  variant:{
    extend:{
     
    }
  },
  plugins: [
    require('./src/Asset/Plugins/customFont')
  ]
}
