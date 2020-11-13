import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./utils/Footer";
import Homepage from "./pages/Homepage";
import Loueur from "./pages/Loueur";
import Station from "./pages/Station";

const useStyles = makeStyles((theme) => ({
	root: {
		boxShadow: "none",
		margin: "0px",
		width: "100%",
	},
	header: {
		marginLeft: "120px",
		padding: "0",
	},
	menuButton: {
		marginRight: theme.spacing(2),
		fill: "#FFF",
		width: "40px",
		height: "40px",
	},
	title: {
		padding: "0 10px",
		fontSize: "16px",
		color: "#FFF",
	},
}));

export default function App() {
	const classes = useStyles();

	return (
		<Router>
			<div>
				<AppBar position="static" color="transparent" className={classes.root}>
					<Toolbar className={classes.header}>
						<img
							src={require("./img/site-icon.png")}
							className={classes.menuButton}
						/>
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
						<Loueur />
					</Route>
					<Route path="/stations">
						<Station />
					</Route>
					<Route path="/">
						<Homepage />
					</Route>
				</Switch>
			</div>
			<Footer />
		</Router>
	);
}
