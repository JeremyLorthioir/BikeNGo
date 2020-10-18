import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">BikeNGO</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    footerContainer: {
    backgroundColor: '#F8E1DB',
    borderRadius: '200px 200px 0 0',
    padding: theme.spacing(6),
  },
  footer: {
    display: 'flex', 
    justifyContent: 'space-evently', 
    textAlign: 'left',
    paddingBottom: '35px',
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footerContainer}>
      <Grid className={classes.footer} container>
        <Grid md='4'>
            <Typography variant="h6" align="center" gutterBottom>
                Bike and Go est l’endroit qu’il vous faut
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Que votre pratique soit occasionnelle, confirmée ou professionnelle vous trouverez toujours ce qu’il vous faut ici !  
                Laissez-vous guider en toute confiance  par la selection de nos experts.
            </Typography>
      </Grid>
      <Grid md='4'>
        <Typography variant="h6" align="center" gutterBottom>
            Faisons connaissance
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                A propos<br/>
                Mentions légales<br/>
                Plan du site<br/>
                Contactez-nous
            </Typography>
        </Grid>
      <Grid md='4'>
      <Typography variant="h6" align="center" gutterBottom>
            Réservez
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Trouvez votre station<br/>
        Trouvez votre loueur
            </Typography>
      </Grid>
      </Grid>
      <Copyright />
    </footer>
  );
}
