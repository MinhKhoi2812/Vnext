import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "./content/content.js";
import Sidebar from "./sidebar/sidebar.js";

const useStyles = makeStyles(theme => ({
	root: {
		display:'flex',
		
		marginTop: 4,
		color: "#636e72",
	},
	sidebar:{
		flexGrow: '1',
	},
	content:{
		flexGrow: '8'
	},
}))

const Main = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Sidebar className={classes.sidebar}/>
			<Content className={classes.content}/>
		</div>
	);
};

export default Main;
