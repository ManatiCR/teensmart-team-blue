import React from 'react';
import { Box } from '@material-ui/core';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import FirstDescription from '../Components/FirstDescription';
import SecondDescription from '../Components/SecondDescription';
import GetInvolve from '../Components/GetInvolve';
import NewsYouTube from '../Components/NewsYouTube';
import Awards from '../Components/Awards';
import OurImpact from '../Components/OurImpact';
import Alliances from  '../Components/Alliances';
import Bullets from '../Components/Bullets';
import Footer from '../Components/Footer';
import '../index.css';

function Home() {
  return (
    <div style={{display: 'flex'}}>
      <div style={{flexGrow: 1}}>
        <Box>
          <Header />
          <Navbar />
          <FirstDescription />
          <SecondDescription />
          <OurImpact />
          <Bullets />
          <GetInvolve />
          <Alliances />
          <Awards />
          <NewsYouTube />
          <Footer />
        </Box>
      </div>
    </div>
  );
}


export default Home;