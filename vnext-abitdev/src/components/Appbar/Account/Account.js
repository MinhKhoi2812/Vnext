import React from "react";
import { useStyles } from "./style.js";
import PersonIcon from "@material-ui/icons/Person";

const Account = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.textAccount}>
				<p className={classes.textAccount__top}>abitdevlop</p>
				<p className={classes.textAccount__bot}>Account settings</p>
			</div>
			<PersonIcon className={classes.userIcon} />
		</div>
	);
};

export default Account;
