import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const Divider = ({ top , bottom }) => {
  const useStyles = makeStyles( theme => ({
    root: {
      marginTop: top ? theme.spacing(top) : 0,
      marginBottom: bottom ? theme.spacing(bottom) : 0,
    }
  }));

  return ( 
    <Grid className={useStyles().root} item xs={12}>
    </Grid>
  );
}
 
export default Divider;