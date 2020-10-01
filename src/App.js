import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./utils/Footer";

const useStyles = makeStyles((theme) => ({
	root: {},
	menuButton: {
		marginRight: theme.spacing(2),
		fill: "#000",
	},
	title: {
		padding: "0 10px",
		fontSize: "16px",
		color: "#000",
	},
}));

export default function App() {
	const classes = useStyles();

	return (
		<Router>
			<div className={classes.root}>
				<AppBar position="static" color="#fff">
					<Toolbar>
						<MenuIcon className={classes.menuButton} />
						<Typography variant="h6" className={classes.title}>
							<Link to="/">Accueil</Link>
						</Typography>
						<Typography variant="h6" className={classes.title}>
							<Link to="/loueurs">Les loueurs</Link>
						</Typography>
						<Typography variant="h6" className={classes.title}>
							<Link to="/stations">Les stations</Link>
						</Typography>
						<Typography variant="h6" className={classes.title}>
							<Link to="/evenements">Evenements</Link>
						</Typography>
						<Typography variant="h6" className={classes.title}>
							<Link to="/espace-professionnels">Espace professionnels</Link>
						</Typography>
					</Toolbar>
				</AppBar>
				<Switch>
        <Route path="/espace-professionnels">
						<h2>Espace pro</h2>
					</Route>
          <Route path="/evenements">
						<h2>Evenements</h2>
					</Route>
          <Route path="/loueurs">
						<h2>loueur</h2>
					</Route>
					<Route path="/stations">
						<h2>Station</h2>
					</Route>
					<Route path="/">
						<h2>Home</h2>
					</Route>
				</Switch>
			</div>
			<Footer />
		</Router>
	);
}
