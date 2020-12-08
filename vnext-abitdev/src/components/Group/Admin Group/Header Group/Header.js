import React from "react";
import { useStyles } from "./style.js";
import Typography from "@material-ui/core/Typography";
import CreateIcon from "@material-ui/icons/Create";
import ScannerIcon from "@material-ui/icons/Scanner";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PeopleIcon from "@material-ui/icons/People";

const Header = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.headerLeft}>
				<Typography>group 1</Typography>
				<CreateIcon />
			</div>
			<div className={classes.headerRight}>
				<div className={classes.headerRight__admin}>
					<SupervisorAccountIcon />
					<Typography>3 Admins</Typography>
				</div>
				<div className={classes.headerRight__user}>
					<PeopleIcon />
					<Typography>2 Users</Typography>
				</div>
				<div className={classes.devices}>
					<ScannerIcon />
					<Typography>0 Devices</Typography>
				</div>
			</div>
		</div>
	);
};

export default Header;
