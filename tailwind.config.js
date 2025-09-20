const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: [
      "./public/**/*.html",
      "./public/*.html",
      "./src/**/*.js",
      "./src/*.js",
      "./src/**/*.html",
      "./src/*.html",
      "./public/**/*.js",
      "./public/*.js",
    ],
    options: {
      safelist: [],
    },
  },
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      // Ajoutez ces extensions pour le backdrop blur
      backdropBlur: {
        '2xl': '40px',
        '3xl': '64px',
        '4xl': '80px',
        'mirror': '20px',
        'mirror-intense': '40px',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
        'blur-lg': 'blur(40px)',
      },
      // Extension pour les ombres plus prononcées
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0 45px 80px -25px rgba(0, 0, 0, 0.4)',
        'mirror': '0 8px 32px 0 rgba(0, 0, 0, 0.36), 0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 -10px 20px 0 rgba(255, 255, 255, 0.1) inset',
        'mirror-intense': '0 12px 40px 0 rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15) inset, 0 -15px 30px 0 rgba(255, 255, 255, 0.15) inset, 0 10px 20px 0 rgba(255, 255, 255, 0.1)',
      },
      // Extension pour les flous personnalisés
      blur: {
        '2xl': '40px',
        '3xl': '64px',
      },
      // Extension pour les opacités supplémentaires
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
        '85': '0.85',
        '90': '0.90',
        '95': '0.95',
      },
      // Dégradés pour effet miroir
      backgroundImage: {
        'mirror-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)',
        'mirror-shine': 'linear-gradient(120deg, rgba(255, 255, 255, 0.3) 0%, transparent 60%, rgba(255, 255, 255, 0.2) 100%)',
      },
      // Couleurs de bordure pour effet miroir
      borderColor: {
        'mirror': 'rgba(255, 255, 255, 0.2)',
        'mirror-intense': 'rgba(255, 255, 255, 0.3)',
      },
      minHeight: {
        "screen-75": "75vh",
      },
      fontSize: {
        55: "55rem",
      },
      zIndex: {
        2: 2,
        3: 3,
      },
      inset: {
        "-100": "-100%",
        "-225-px": "-225px",
        "-160-px": "-160px",
        "-150-px": "-150px",
        "-94-px": "-94px",
        "-50-px": "-50px",
        "-29-px": "-29px",
        "-20-px": "-20px",
        "25-px": "25px",
        "40-px": "40px",
        "95-px": "95px",
        "145-px": "145px",
        "195-px": "195px",
        "210-px": "210px",
        "260-px": "260px",
      },
      height: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
      },
      maxHeight: {
        "860-px": "860px",
      },
      maxWidth: {
        "100-px": "100px",
        "120-px": "120px",
        "150-px": "150px",
        "180-px": "180px",
        "200-px": "200px",
        "210-px": "210px",
        "580-px": "580px",
      },
      minWidth: {
        "140-px": "140px",
        48: "12rem",
      },
      backgroundSize: {
        full: "100%",
      },
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addComponents, addUtilities, theme }) {
      const screens = theme("screens", {});
      
      // Configuration du container
      addComponents([
        {
          ".container": { width: "100%" },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": {
              "max-width": "640px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": {
              "max-width": "768px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": {
              "max-width": "1024px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
      ]);

      // Utilities pour effet miroir
      const mirrorUtilities = {
        '.mirror-effect': {
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
          'backdrop-filter': 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.36), 0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 -10px 20px 0 rgba(255, 255, 255, 0.1) inset',
        },
        '.mirror-effect-intense': {
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)',
          'backdrop-filter': 'blur(40px)',
          border: '1.5px solid rgba(255, 255, 255, 0.25)',
          'box-shadow': '0 12px 40px 0 rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15) inset, 0 -15px 30px 0 rgba(255, 255, 255, 0.15) inset, 0 10px 20px 0 rgba(255, 255, 255, 0.1)',
        },
        '.mirror-shine': {
          'position': 'relative',
          'overflow': 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '20%',
            background: 'linear-gradient(120deg, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
            'border-radius': 'inherit',
          }
        },
      };

      addUtilities(mirrorUtilities, ['responsive', 'hover']);
    }),
  ],
};