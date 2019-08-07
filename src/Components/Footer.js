import React from 'react';
import { Grid, Link } from '@material-ui/core';
import { IoIosMail } from 'react-icons/io';
import { makeStyles } from '@material-ui/core/styles';
import { FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';  
import '../index.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        background: '#e3e2de',
        marginTop: '105px',
    },
    root2: {
        flexGrow: 1,
        background: '#e3e2de',
        paddingTop: theme.spacing(1),
    },
    title: {
        paddingTop: theme.spacing(4),
        paddingLeft: theme.spacing(1),
        textAlign: 'left',
        fontWeight: 700,
        fontSize: '18px',
        fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif', 
    },
    foot: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(8),
        textAlign: 'left',
        fontWeight: 700,
        fontSize: '15px',
        fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif', 
    },
    link: {
        textDecoration: 'underline',
        color: '#000',
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif', 
        fontWeight: 700,
    },
    image: {
        float: 'left',
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        width: '50%',
    },
    margin: {
        marginLeft: theme.spacing(0),
    },
    icons: {
        fontSize: '30px',
        color: '#fff',
        paddingLeft: '5px',
    },
    fb: {
        float: 'left',
        marginLeft: theme.spacing(2),
        background: '#3b5998',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
    },
    tw: {
        float: 'left',
        marginLeft: theme.spacing(2),
        background: '#1da1f2',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
    },
    yo: {
        float: 'left',
        marginLeft: theme.spacing(2),
        background: '#ff0000',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
    },
    em: {
        float: 'left',
        marginLeft: theme.spacing(2),
        background: '#fffc00',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
    },

}));

export default function Footer() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={0} justify="space-around">
                    <Grid item xs={12} sm={12} md={3}>
                    <img className={classes.image} src={require("../assets/logoweb2.png")} alt="TeenSmart Logo"></img>
                     <img className={classes.image} src={require("../assets/logoweb.png")} alt="JovenSalud Logo"></img>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className={classes.title}>Keep in touch</div>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.root2}>
                <Grid container spacing={0} justify="space-around">
                    <Grid item xs={12} sm={12} md={3}>
                    <div className={classes.link} >
                            <a href="#">Contact us</a>
                            <span>    |    </span>
                            <a href="#">Volunteer</a>
                            <span>    |    </span>
                            <a href="#">Get involved</a>
                    </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className={classes.fb}>
                        <Link className={classes.icons} href='https://www.facebook.com/TeenSmart/' target='_blank'>
                        <FaFacebookF /> 
                        </Link></div>
                        <div className={classes.tw}>
                        <Link className={classes.icons} href='https://twitter.com/TeenSmartInt' target='_blank'>
                        <FaTwitter />  
                        </Link></div>
                        <div className={classes.yo}>
                        <Link className={classes.icons} href='https://www.youtube.com/channel/UCGDhV-Ia0L-Q5ue7M2LxEgQ' target='_blank' color='secondary'>
                        <FaYoutube />
                        </Link></div>
                        <div className={classes.em}>
                        <Link className={classes.icons} href='mailto:info@teensmart.net' >
                        <IoIosMail />
                        </Link></div>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.root2}>
                <Grid container spacing={0} >
                    <Grid item xs={12} sm={12} md={12}>
                        <div className={classes.foot}>TeenSmart © 2019</div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
