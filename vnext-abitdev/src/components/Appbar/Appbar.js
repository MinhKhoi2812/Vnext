import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TodayIcon from "@material-ui/icons/Today";
import { useStyles } from "./style.js";
import ButtonLanguages from "./Button/ButtonLanguages.js";
import Account from "./Account/Account.js";
import Calendar from './Calendar/Calendar.js'
const Navbar = () => {
	const classes = useStyles();
	const [state, setState] = React.useState({
		age: "",
		name: "hai",
	});

	const handleChange = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.Appbar}>
				<Toolbar className={classes.toolbar}>
					<div className={classes.toolbar__left}>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							Logo
						</Typography>
						<div className={classes.calendar}>
							<TodayIcon />
							<Typography className={classes.calender__Text}>
								December 2nd 2020
							</Typography>
						</div>
					</div>

					<div className={classes.toolbar__right}>
						<div className={classes.languages}>
							<ButtonLanguages />
						</div>
						<Account />
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
