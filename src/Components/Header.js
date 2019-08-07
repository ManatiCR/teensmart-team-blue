import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import HeaderCard from './HeaderCard';
import HeaderIcons from './HeaderIcons';
import Divider from './Divider';

const theme = createMuiTheme({
  typography: {
    'fontFamily': 'Arial',
    'fontSize': 16,
  },
});

const Header = () => {

  return ( 
    <Grid container spacing={1}>
      <Divider top={0.5} />
      <Grid container item xs={12} sm={6} spacing={1}>
        <HeaderCard logo='teenSmartLogo' title='Teen Smart Logo' />
        <HeaderCard logo='jovenSaludLogo' title='Joven Salud Logo' />
      </Grid>
      <Hidden xsDown>
        <MuiThemeProvider theme={theme}>
          <HeaderIcons />
        </MuiThemeProvider>
      </Hidden>
      <Divider bottom={0} />
    </Grid>
  );
};
 
export default Header;