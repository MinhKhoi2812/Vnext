import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "./content/content.js";
import Sidebar from "./sidebar/sidebar.js";
import Dashboard from "../Dashboard/Dashboard.js";
import Group from "../Group/Group.js";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		marginTop: 4,
		color: "#636e72",
		flexWrap: "wrap",
	},
	sidebar: {
		flex: "30%!important",
	},
	content: {
		flex: "70%!important",
	},
}));

const Main = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Router>
				<Grid container>
					<Grid item xs={2}>
						<Sidebar className={classes.sidebar} />
					</Grid>
					<Grid item xs={10}>
						<Switch>
							<Route
								path="/device"
								component={Content}
								key="device"
							>
								<Content />
							</Route>
							<Route path="/Group" component={Group} key="group">
								<Group />
							</Route>
							<Route
								path="/"
								component={Dashboard}
								key="dashboard"
							>
								<Dashboard />
							</Route>
						</Switch>
					</Grid>
				</Grid>
			</Router>
		</div>
	);
};

export default Main;
