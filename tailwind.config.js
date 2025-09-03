module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./public/**/*.html"
    ],
    theme: {
        container: {
            center: true,
            screens: {
                sm: "100%",
                md: "82rem",
                lg: "72rem",
                xl: "90rem",
                "2xl": "1920px",
            },
        },
        extend: {
            colors: {
                primary: "#F36E1E",
                secondary: "#F3AC22",
                dark: "#212121",
            },
            fontFamily: {
                custom: ["MyCustomFont", "sans-serif"], 
                montserrat: ["Montserrat", "sans-serif"], // Google font
                lato: ["Lato", "sans-serif"],            // Google font
            },
            fontSize: {
                responsive: "clamp(1rem, 2vw + 1.3rem, 4rem)",
            },
            keyframes: {
                shine: {
                    "0%": { "background-position": "100%" },
                    "100%": { "background-position": "-100%" },
                },
            },
            animation: {
                shine: "shine 5s linear infinite",
            },
        },
    },
};