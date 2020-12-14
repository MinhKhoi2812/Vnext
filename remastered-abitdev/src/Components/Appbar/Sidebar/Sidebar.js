import React from "react";
import { useStyles } from "./style.js";
import List from "@material-ui/core/List";

import Listsidebar from "./ListSideBar.js";
import { HomeIcon } from "./Icon.js";

const Sidebar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<List
				component="nav"
				aria-labelledby="nested-list-subheader"
				className={classes.listsidebar}
			>
				<Listsidebar />
			</List>
		</div>
	);
};

export default Sidebar;
