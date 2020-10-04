import React from "react";
import {
    makeStyles
} from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    image:{  
        height: '100vh',
        width: '100%', 
        position: 'relative', 
        marginTop: '-64px',
        zIndex: '-1',
        objectFit: 'cover',
        borderRadius: '0 0 200px 200px',
    },
    title: {
        fontSize: '70px', 
        fontWeight: 'bold',
        paddingBottom: '40px',
        maxWidth: '50%',
    },
    titleContainer: {
        position: 'absolute', 
        top: 0,
        height: '100vh', 
        width: '100%', 
        textAlign: 'center',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: '#FFF', 
    },
    subtitle: {
        padding: '40px', 
        fontSize: '24px',
        maxWidth: '50%'
    },
}));

export default function Homepage() {
    const classes = useStyles();
    return ( 
        <div>
            <img className={classes.image} src={require('../img/homepage-main-picture.png')}/>
            <Grid direction='column' className={classes.titleContainer}>
                <Typography variant="h1" className={classes.title}>Redescendre sans jamais grimper</Typography>
                <Typography variant="subtitle" className={classes.subtitle}>Réservez votre matériel de descente dans les meilleurs ateliers des plus grandes stations de sports d’hiver.</Typography>
                <Button variant="contained" color="secondary">Découvrez les stations</Button>
            </Grid>
        </div>
    );
}