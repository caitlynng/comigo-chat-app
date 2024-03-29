import styled from 'styled-components';

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  letter-spacing: 0.5px;
  /* background-color: #f8f9fa; */
`;

export const primaryColor = '#4d4dff';
export const primaryColorHover = '#6666ff';

export const materialDefaultTheme: { [key: string]: any } = {
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
        cursor: 'pointer',
      },
    },
  },

  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        alignItems: 'start',
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        padding: '0 9px',
      },
    },
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        '&.MuiCheckbox-root.Mui-checked, &.MuiCheckbox-root.MuiCheckbox-indeterminate':
          {
            color: primaryColor,
          },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
};

export const authPageDefaultTheme: { [key: string]: any } = {
  MuiButton: {
    styleOverrides: {
      root: {
        backgroundColor: primaryColor,
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: primaryColorHover,
        },
      },
    },
  },
};
