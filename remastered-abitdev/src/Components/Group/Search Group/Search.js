import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import API from "../../../axios.config.js";
import { useStyles } from "./styles.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const url = `https://2mhmjkchx5.execute-api.ap-southeast-1.amazonaws.com/dev`;

const Search = () => {
	const [searchItem, setSearchItem] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [data, setData] = useState([]);
	const [item, setItem] = useState([]);
	const handleChange = (e) => {
		setSearchItem(e.target.value);
		console.log(e.target.value);
	};

	useEffect(() => {
		const fetchData = async () => {
			const result = await API.post(`${url}/orion/group/listGroup`, {
				limit: 10,
				page: 1,
				field: "group_id",
				typeOrder: "ASC",
			})
				.then(({ data: { data } }) => {
					setItem(data);
				})
				.catch((err) => console.log(err));
		};
		fetchData();
	}, [setSearchItem]);

	useEffect(() => {
		const result = item.filter((items) => {
			return items.group_name
				.toLowerCase()
				.includes(searchItem.toLowerCase());
		});
		setSearchResult(result);
	}, [item, searchItem]);

	

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
			{searchResult.map((item) => {
				return (
					<List key={item.group_id}>
						<Link
							to="/`${item.group_num}`"
							className={classes.link}
						>
							<ListItem className={classes.listItem} button>
								<ListItemText
									primary={item.group_name}
									className={classes.textItem}
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
