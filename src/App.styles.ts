import styled from 'styled-components';

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const primaryColor = '#4d4dff';
export const primaryColorHover = '#6666ff';

export const materialDefaultTheme: { [key: string]: any } = {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline,.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, .MuiInputLabel-root.Mui-focused ':
            {
              borderColor: primaryColor,
              color: primaryColor,
            },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: primaryColor,
          textDecoration: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: primaryColor,
          '&:hover': {
            backgroundColor: primaryColorHover,
          },
        },
      },
    },
  },
};
