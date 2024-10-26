const greyColors = {
  100: '#F2F4F6',
  200: '#E5E8EB',
  500: '#8B95A1',
  700: '#4E5968',
  800: '#333D48',
  900: '#191f28',
};

const blueColors = {
  500: '#3182f6',
  700: '#1b64da',
  800: '#1957c2',
  900: '#194aa6',
};

export const theme = {
  font: {
    size: {
      small: '12px',
      primary: '16px',
      large: '18px',
      xLarge: '24px',
    },
    weight: {
      light: 400,
      regular: 400,
      medium: 400,
      primary: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
  },
  border: {
    radius: {
      primary: '24px',
      small: '12px',
    },
  },
  colors: {
    background: {
      chatbot: greyColors[100],
      user: blueColors[500],
      input: greyColors[100],
      grey: greyColors[100],
      greyHover: greyColors[200],
    },
    grey: {
      border: greyColors[200],
      light: greyColors[500],
      hover: greyColors[700],
      primary: greyColors[800],
    },
    blue: {
      primary: blueColors[500],
      hover: blueColors[700],
    },
    vocabulary: {
      0: '#F9D413',
      1: '#00B7FF',
      2: blueColors[500],
      3: '#7A45FF',
    },
  },
};
