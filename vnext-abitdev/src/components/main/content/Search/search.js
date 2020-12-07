import React, { useState, useEffect } from "react";
import { useStyles } from "./style.js";
import ButtonDiaLog from "./ButtonDialog/ButtonDialog.js";
import {
	Grid,
	Button,
	ButtonGroup,
	ArrowDropDownIcon,
	SearchIcon,
	RouterIcon,
	SortIcon,
	FilterListIcon,
	Table,
	TableContainer,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Paper,
} from "./tableData.js";

export const Program = ["React", "Angular", "Vue", "PHP"];

export default function SplitButton() {
	const [searchItem, setSearchItem] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const handleChange = (e) => {
		setSearchItem(e.target.value);
	};

	useEffect(() => {
		const result = Program.filter((person) =>
			person.toLowerCase().includes(searchItem)
		);
		setSearchResult(result);
	}, [searchItem]);

	const classes = useStyles();

	return (
		<Grid
			container
			direction="column"
			alignItems="center"
			className={classes.rootItem}
		>
			<div className={classes.btn}>
				<ButtonGroup className={classes.buttonGroup}>
					<input
						className={classes.textInput}
						type="text"
						placeholder="search..."
						value={searchItem}
						onChange={handleChange}
					/>

					<Button size="small" className={classes.search}>
						<SearchIcon />
					</Button>
				</ButtonGroup>
			</div>
			<div className={classes.buttonDevice}>
				<ButtonDiaLog />
			</div>

			<TableContainer component={Paper} className={classes.rootTable}>
				<Table
					border="1"
					className={classes.table}
					aria-label="simple table"
				>
					<TableHead>
						<TableRow className={classes.styleTableRow}>
							<TableCell
								className={classes.styleName}
								align="center"
							>
								<span>Name</span>
								<SortIcon />
							</TableCell>
							<TableCell
								size="small"
								className={classes.styleDevice}
								align="center"
							>
								Device ID
							</TableCell>
							<TableCell
								className={classes.styleType}
								align="center"
							>
								<span>Type</span>

								<FilterListIcon />
							</TableCell>
							<TableCell
								className={classes.styleName}
								align="center"
							>
								<span>Last Activity</span>
								<SortIcon />
							</TableCell>
							<TableCell
								className={classes.styleName}
								align="center"
							>
								<span>Create At</span>
								<SortIcon />
							</TableCell>
							<TableCell
								className={classes.styleName}
								align="center"
							>
								<span>Location</span>
							</TableCell>
							<TableCell
								className={classes.styleName}
								align="center"
							>
								<span>Group</span>
								FilterListIcon
							</TableCell>
							<TableCell
								className={classes.styleName}
								align="center"
							>
								Actions
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{searchResult.map((item, index) => {
							return (
								<TableRow>
									<TableCell>{item}</TableCell>
									<TableCell>{item}</TableCell>
									<TableCell>{item}</TableCell>
									<TableCell>{item}</TableCell>
									<TableCell>{item}</TableCell>
									<TableCell>{item}</TableCell>
									<TableCell>{item}</TableCell>
									<TableCell>{item}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Grid>
	);
}
