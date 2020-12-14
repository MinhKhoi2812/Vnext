import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Search from "./Search Group/Search.js";
import Admin from "./Admin Group/Admin.js";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Group = () => {
	const classes = useStyles();
	return (
		<Container className={classes.root}>
			<Router>
				<Grid container>
					<Grid item xs={3}>
						<Paper className={classes.searchComponent}>
							<Search />
						</Paper>
					</Grid>
					<Grid item xs={9}>
						<Paper className={classes.groupComponnent}>
						<Switch></Switch>
							<Admin />
						</Paper>
					</Grid>
				</Grid>
			</Router>
		</Container>
	);
};

export default Group;
