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
        zIndex: '-1',
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
        paddingBottom: '40px', 
        fontSize: '24px',
        maxWidth: '50%'
    },
    cardContainer: {
        maxWidth: '80%', 
        margin: 'auto', 
        justifyContent: 'space-around'
    },
    card: {
        backgroundColor: '#FFFFFF', 
        borderRadius: '25px', 
        padding: '30px', 
        marginTop: '-145px', 
        width: 'calc(100% - 15px)'
    },
    cardImageContainer: {
        height: '100px', 
        width: '100px',
        margin:'auto',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    cardImage: {
        maxWidth: '100px', 
        maxHeight: '100px',
        display: 'block',
        margin: 'auto'
    },
    cardTitle: {
        fontSize: '20px',
        fontWeight: 'bold', 
        textAlign: 'center', 
        padding: '10px 0'
    }, 
    cardSubtitle: {
        fontSize: '16px',
        textAlign: 'center',
        display: 'block',
        margin: 'auto'
    },
}));

export default function Homepage() {
    const classes = useStyles();
    return ( 
        <div>
            {/* HEADER PICTURE */}
            <img className={classes.image} src={require('../img/homepage-main-picture.png')}/>
            <Grid direction='column' className={classes.titleContainer}>
                <Typography variant="h1" className={classes.title}>Redescendre sans jamais grimper</Typography>
                <Typography variant="subtitle" className={classes.subtitle}>Réservez votre matériel de descente dans les meilleurs ateliers des plus grandes stations de sports d’hiver.</Typography>
                <Button variant="contained" color="secondary">Découvrez les stations</Button>
            </Grid>

            {/* FIRST CARD ROW */}
            <Grid direction='row' container className={classes.cardContainer}>
                <Grid direction='column' className={classes.card} sm={2}>
                    <div className={classes.cardImageContainer}>
                        <img className={classes.cardImage} src={require('../img/homepage-firecamp-icon.png')} />
                    </div>
                    <Typography variant="h2" className={classes.cardTitle}>Sélectionnez votre station</Typography>
                    <Typography variant="subtitle" className={classes.cardSubtitle}>Retrouvez les principales informations des stations : plan, météo, tarifs…</Typography>
                </Grid>
                <Grid direction='column' className={classes.card} sm={2}>
                    <div className={classes.cardImageContainer}>
                        <img className={classes.cardImage} src={require('../img/homepage-ticket-icon.png')} />
                    </div>
                    <Typography variant="h2" className={classes.cardTitle}>Choisissez vos dates de séjour</Typography>
                    <Typography variant="subtitle" className={classes.cardSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                </Grid>
                <Grid direction='column' className={classes.card} sm={2}>
                    <div className={classes.cardImageContainer}>
                        <img className={classes.cardImage} src={require('../img/homepage-paper-icon.png')} />
                    </div>
                    <Typography variant="h2" className={classes.cardTitle}>Sélectionnez votre loueur</Typography>
                    <Typography variant="subtitle" className={classes.cardSubtitle}>Sélectionnez le loueur partenaire qui correspond au mieux à votre discipline, budget ou localisation</Typography>
                </Grid>
                <Grid direction='column' className={classes.card} sm={2}>
                    <div className={classes.cardImageContainer}>
                        <img className={classes.cardImage} src={require('../img/homepage-gear-icon.png')} />
                    </div>
                    <Typography variant="h2" className={classes.cardTitle}>Réservez</Typography>
                    <Typography variant="subtitle" className={classes.cardSubtitle}>Une fois votre matériel trouvé, envoyez une demande de réservation au loueur et attendez sa confirmation</Typography>
                </Grid>
            </Grid>

        </div>
    );
}