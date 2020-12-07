import React from "react";
import { useStyles } from "./style.js";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import RouterIcon from "@material-ui/icons/Router";
import Search from "./Search/search.js";

const Content = () => {
	const classes = useStyles();
	return (
		<div>
			<Grid container>
				<Grid item xs={12}>
					<Typography className={classes.typography}>
						Devices
					</Typography>
				</Grid>

				<Search />
			</Grid>
		</div>
	);
};

export default Content;
