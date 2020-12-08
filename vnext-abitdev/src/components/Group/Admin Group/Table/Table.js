import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { useStyles1, useStyles2 } from "./style.js";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TablePagination,
	TableRow,
	IconButton,
	FirstPageIcon,
	KeyboardArrowLeft,
	LastPageIcon,
	KeyboardArrowRight,
	TableHead
} from "./data.js";

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const TableDatas = () => {
	const classes = useStyles1();
	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<div className={classes.headTable}>
					<input
						type="text"
						placeholder="search..."
						className={classes.inputSearch}
					/>
					<div className={classes.btnAdmin}>
						<Button variant="contained" className={classes.button}>
							<PlaylistAddCheckIcon className={classes.icon} />
							<span>ADMIN PERMISSION</span>
						</Button>
						<Button variant="contained" className={classes.button}>
							<PersonAddIcon className={classes.icon} />
							<span>ADD ADMIN</span>
						</Button>
					</div>
				</div>
				<TableContainer component={Paper} className={classes.tableContainer}>
					<Table  className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Dessert (100g serving)</TableCell>
								<TableCell align="right">Calories</TableCell>
								<TableCell align="right">
									Fat&nbsp;(g)
								</TableCell>
								<TableCell align="right">
									Carbs&nbsp;(g)
								</TableCell>
								<TableCell align="right">
									Protein&nbsp;(g)
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.name}>
									<TableCell component="th" scope="row">
										{row.name}
									</TableCell>
									<TableCell align="right">
										{row.calories}
									</TableCell>
									<TableCell align="right">
										{row.fat}
									</TableCell>
									<TableCell align="right">
										{row.carbs}
									</TableCell>
									<TableCell align="right">
										{row.protein}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</div>
	);
};

export default TableDatas;
