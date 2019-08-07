import React, { useEffect, useState } from 'react'   
import axios from 'axios';
import Award from './Award'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles ({
    title: {
      fontFamily: 'Arial',
      fontSize: '1.5em',
      fontWeight: 'bold',
    },
});

const Awards = () => {

  //hooks 
  const [awards, setAwards] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    async function fetchAwards(){
      await axios('http://dev-teensmart-team-blue.pantheonsite.io/api/awards', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(response => setAwards(response.data)).catch(e => alert(e));
    }
    fetchAwards();
  }, []);

  const renderAwards = () => (
    awards && awards.map(award => <Award award={award} key={award.id[0].value} /> )
  );

  return ( 
    <div style={{padding:"24px", maxWidth: "1250px", width: "100%", margin: "0 auto"}}>
      <div style={{flexGrow:1}}>
        <Grid container spacing={2} justify='center'>
          <Grid item xs={12}>
            <h2 className={classes.title}>
              Awards
            </h2>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="space-between" spacing={2}>
              { renderAwards() }
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Awards