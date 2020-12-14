import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";



import {useStyles} from './style.js'
const Navbar = () => {
	const classes = useStyles();

	return (
		<ButtonGroup className={classes.root}>
			<Button className={classes.button}>ADMIN</Button>
			<Button className={classes.button}>USERS</Button>
			<Button className={classes.button}>DEVICES</Button>
		</ButtonGroup>
	);
};

export default Navbar;
