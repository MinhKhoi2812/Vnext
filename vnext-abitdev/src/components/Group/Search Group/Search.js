import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { useStyles } from "./styles.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const groupData = [
	{ group: "Group1", path: "/admin1" },
	{ group: "Group2", path: "/admin2" },
	{ group: "Group3", path: "/admin3" },
	{ group: "Group4", path: "/admin4" },
	{ group: "Group5", path: "/admin5" },
];

const Search = () => {
	const [searchItem, setSearchItem] = useState("");
	const [searchResult, setSearchResult] = useState(groupData);
	const handleChange = (e) => {
		setSearchItem(e.target.value);
		console.log(e.target.value);
	};

	useEffect(() => {
		const result = groupData.filter((item) => {
			return item.group.toLowerCase().includes(searchItem);
		});
		setSearchResult(result);
	}, [searchItem]);

	const classes = useStyles();

	return (
		<div>
			<Typography align="left" className={classes.textGroup}>
				List Group
			</Typography>
			<form action="">
				<input
					type="text"
					placeholder="search..."
					className={classes.searchInput}
					value={searchItem}
					onChange={handleChange}
				/>
			</form>
			{searchResult.map((item, index) => {
				return (
					<List>
						<Link to={item.path} className={classes.link}>
							<ListItem  className={classes.listItem} button>
								<ListItemText
									primary={item.group}
									className={classes.textItem}
									key={index}
								/>
							</ListItem>
						</Link>
					</List>
				);
			})}
		</div>
	);
};

export default Search;
