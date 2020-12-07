import React from "react";
import { useStyles } from "./style.js";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Listsidebar from "./Listsidebar.js";
import { HomeIcon } from "./Icon.js";

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
			<List component="nav" aria-labelledby="nested-list-subheader"className={classes.listsidebar} >
				<Listsidebar  />
			</List>
		</div>
    );
};

export default Sidebar;