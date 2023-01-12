module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        1: "283px",
        2: "475px",
        3: "543px",
        4: "760px",
        5: "1047px",
      },
      colors: {
        body: "#202020",
        lightgray: "#bcbcbc",
        extralightgray: "#202020bf",
      },
      fontFamily: {
        body: ["Inter", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        sm: "12px",
        base: "14px",
        lg: "16px",
        "2lg": "18px",
        "3lg": "20px",
        "4lg": "25px",
        xl: "30px",
        "2xl": "35px",
        "3xl": "40px",
        "4xl": "45px",
      },
    },
  },
  plugins: [],
};
