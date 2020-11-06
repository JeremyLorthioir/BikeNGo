import React from "react";
import {
    makeStyles
} from "@material-ui/core/styles";
import ReactStars from "react-rating-stars-component";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';

export default function Homepage() {
    let lovedRental = [
        {
            name: 'Loueur 1',
            station: 'Chamrousse',
            description: 'Lorem ipsum',
            photoUrl: 'https://cdn-s-www.ledauphine.com/images/B23A08E6-95C0-4717-AE74-0BAAF48340C0/NW_raw/chamrousse-vue-des-pistes-mais-a-l-horizon-2020-image-aktis-1523223787.jpg',
            rating: 5
        }, 
        {
            name: 'Loueur 2',
            station: 'Chamrousse',
            description: 'Lorem ipsum',
            photoUrl: '/img/homepage-paper-icon.png',
            rating: 4.5
        },
        {
            name: 'Loueur 3',
            station: 'Chamrousse',
            description: 'Lorem ipsum',
            photoUrl: '/img/homepage-paper-icon.png',
            rating: 2
        }, 
        {
            name: 'Loueur 4',
            station: 'Alpe Huez',
            description: 'Lorem ipsum',
            photoUrl: '/img/homepage-paper-icon.png',
            rating: 3.9
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
                                <div>
                                    <img alt='' className={'cardImage'} src={renter.photoUrl} />
                                </div>
                                <Typography className={'cardLocation'}>{renter.station}</Typography>
                                <Typography variant="h2" className={'cardTitle'}>{renter.name}</Typography>
                                <Typography variant="subtitle" className={'cardSubtitle'}>{renter.description}</Typography>
                                
                                <ReactStars count={5} value={renter.rating} edit={false} size={24} activeColor="#E76F51"/>
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
                                 <div>
                                    <img alt='' className={'cardImage'} src={renter.photoUrl} />
                                </div>
                                <Typography className={'cardLocation'}>{renter.station}</Typography>
                                <Typography variant="h2" className={'cardTitle'}>{renter.name}</Typography>
                                <Typography variant="subtitle" className={'cardSubtitle'}>{renter.description}</Typography>

                                <ReactStars count={5} value={renter.rating} edit={false} size={24} activeColor="#E76F51"/>
                            </Grid>
                        ))
                        
                    }
                </Grid>
            </Grid>
        </div>
    );
}