import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%',
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
      body: {
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
        fontFamily: 'Poppins',
      },
      '#root': {
        height: '100%',
        width: '100%',
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
