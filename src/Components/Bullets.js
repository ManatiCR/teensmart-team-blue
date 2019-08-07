import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';
import Bullet from './Bullet';
import Divider from './Divider';

const useStyles = makeStyles(theme => ({
  bullets: {
    margin: '0  4%',
  },
  margin: {
    marginTop: theme.spacing(4),
  },
}))

const Bullets = () => {
  const classes = useStyles();

  //hooks
  const [bullets, setBullets] = useState(null);

  useEffect(() => {
    async function fetchStatistics(){
      await axios('http://dev-teensmart-team-blue.pantheonsite.io/api/statistics', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(response => setBullets(response.data)).catch(e => alert(e));
    }
    fetchStatistics();
  }, []);

  const renderBullets = () => (
    bullets && bullets.map(bullet => <Bullet bullet={bullet} key={bullet.id[0].value} /> )
  );

  return ( 
    <div style={{display: 'flex', padding: '24px', maxWidth: '1250px', width: '100%', margin: '0 auto'}}>
      <div style={{flexGrow:1}}>
        <Grid container  justify='space-around' className={classes.bullets}>
          <Divider top={2} />
          { renderBullets() }
       </Grid>
      </div>
    </div>
   );
}
 
export default Bullets;