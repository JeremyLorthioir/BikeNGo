import React from "react";
import {
    makeStyles
} from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

export default function Homepage() {
    let lovedRental = [
        {
            name: 'Loueur 1',
            description: 'Lorem ipsum',
            photoUrl: '/img/homepage-paper-icon.png'
        }, 
        {
            name: 'Loueur 2',
            description: 'Lorem ipsum',
            photoUrl: '/img/homepage-paper-icon.png'
        },
        {
            name: 'Loueur 3',
            description: 'Lorem ipsum',
            photoUrl: '/img/homepage-paper-icon.png'
        }, 
        {
            name: 'Loueur 4',
            description: 'Lorem ipsum',
            photoUrl: '/img/homepage-paper-icon.png'
        }
    ];
    return ( 
        <div className={'homepage'}>
            {/* HEADER PICTURE */}
            <img alt='' className={'image'} src={require('../img/homepage-main-picture.png')}/>
            <Grid direction='column' className={'titleContainer'}>
                <Typography variant="h1" className={'title'}>Redescendre sans jamais grimper</Typography>
                <Typography variant="subtitle" className={'subtitle'}>Réservez votre matériel de descente dans les meilleurs ateliers des plus grandes stations de sports d’hiver.</Typography>
                <Button variant="contained" color="secondary">Découvrez les stations</Button>
            </Grid>

            {/* FIRST CARD ROW */}
            <Grid direction='row' container className={'cardContainer'}>
                <Grid direction='column' className={'card'} sm={2}>
                    <div className={'cardImageContainer'}>
                        <img alt='' className={'cardImage'} src={require('../img/homepage-firecamp-icon.png')} />
                    </div>
                    <Typography variant="h2" className={'cardTitle'}>Sélectionnez votre station</Typography>
                    <Typography variant="subtitle" className={'cardSubtitle'}>Retrouvez les principales informations des stations : plan, météo, tarifs…</Typography>
                </Grid>
                <Grid direction='column' className={'card'} sm={2}>
                    <div className={'cardImageContainer'}>
                        <img alt='' className={'cardImage'} src={require('../img/homepage-ticket-icon.png')} />
                    </div>
                    <Typography variant="h2" className={'cardTitle'}>Choisissez vos dates de séjour</Typography>
                    <Typography variant="subtitle" className={'cardSubtitle'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                </Grid>
                <Grid direction='column' className={'card'} sm={2}>
                    <div className={'cardImageContainer'}>
                        <img alt='' className={'cardImage'} src={require('../img/homepage-paper-icon.png')} />
                    </div>
                    <Typography variant="h2" className={'cardTitle'}>Sélectionnez votre loueur</Typography>
                    <Typography variant="subtitle" className={'cardSubtitle'}>Sélectionnez le loueur partenaire qui correspond au mieux à votre discipline, budget ou localisation</Typography>
                </Grid>
                <Grid direction='column' className={'card'} sm={2}>
                    <div className={'cardImageContainer'}>
                        <img alt='' className={'cardImage'} src={require('../img/homepage-gear-icon.png')} />
                    </div>
                    <Typography variant="h2" className={'cardTitle'}>Réservez</Typography>
                    <Typography variant="subtitle" className={'cardSubtitle'}>Une fois votre matériel trouvé, envoyez une demande de réservation au loueur et attendez sa confirmation</Typography>
                </Grid>
            </Grid>

            {/* STATIONS PREFERES */}
            <Grid direction='column' container className={'lovedContentContainer cardContainer'}>
                <img alt='' src={require('../img/site-icon.png')} className={'lovedContentImage'} />
                <Typography variant="h2" className={'cardTitle'}>Nos stations préférées</Typography>
                <Grid direction='row' container className={'lovedContentCardContainer'}>
                    
                    {
                        lovedRental.map(renter => (
                            <Grid direction='column' className={'card'} sm={2}>
                                <div className={'cardImageContainer'}>
                                    <img alt='' className={'cardImage'} src={renter.photoUrl} />
                                </div>
                                <Typography variant="h2" className={'cardTitle'}>{renter.name}</Typography>
                                <Typography variant="subtitle" className={'cardSubtitle'}>{renter.description}</Typography>
                            </Grid>
                        ))
                        
                    }
                </Grid>
            </Grid>


            {/* LOUEURS PREFEREES */}
            <Grid direction='column' container className={'lovedContentContainer cardContainer'}>
                <img alt='' src={require('../img/site-icon.png')} className={'lovedContentImage'} />
                <Typography variant="h2" className={'cardTitle'}>Nos loueurs préférées</Typography>
                <Grid direction='row' container className={'lovedContentCardContainer'}>
                    
                    {
                        lovedRental.map(renter => (
                            <Grid direction='column' className={'card'} sm={2}>
                                <div className={'cardImageContainer'}>
                                    <img alt='' className={'cardImage'} src={renter.photoUrl} />
                                </div>
                                <Typography variant="h2" className={'cardTitle'}>{renter.name}</Typography>
                                <Typography variant="subtitle" className={'cardSubtitle'}>{renter.description}</Typography>
                            </Grid>
                        ))
                        
                    }
                </Grid>
            </Grid>
        </div>
    );
}