export default {
    mode: 'jit',
    content: ["./index.html", "./src/**/*.{js,ts}"], 
    theme: {
      extend: {
        colors: {
            brown: {
                100: "#423D3C",
                200: "#383231",
                300: "#2D2726",
                400: "#292424",
                500: "#221E1E",
              },
              primary: {
                DEFAULT: "#F59C5C",
                light: "#F7B687",
              },
              gray: "#CBC9C9",
              accent: {
                DEFAULT: "#3B8256",
                light: "#659477",
              },
              red: "#7E3E3F",
              orange: "#875C36",
              teal: "#377E86",
        },
        fontFamily: {
            fira: ["Fira Sans", serif],
            outfit: ["Outfit", serif],
        },
        fontSize: {
            headingLg: ['32px', { lineHeight: '35.2px' }],
            title: ['3.75rem'],
            titleMd: ['5rem'],
            heading: ['2.25rem'],
            bodyLg: ['1.25rem'],
            bodyMd: ['1.125rem'],
            bodyReg: ['1rem', { lineHeight: '25.6px'}]
        }
      },
    },
    plugins: [],
  };