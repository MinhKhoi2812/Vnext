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
	SettingsIcon,
	GetAppIcon,
	VisibilityIcon,
	CreateIcon,
	DeleteForeverIcon,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "./tableData.js";

import { dataTableHead } from "./tableData.js";
import { Program } from "./tableData.js";

export default function SplitButton() {
	const classes = useStyles();
	const [searchItem, setSearchItem] = useState("");
	const [searchResult, setSearchResult] = useState(Program);
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (e) => {
		setSearchItem(e.target.value);
	};

	useEffect(() => {
		const result = Program.filter((device) => {
			return device.Name.toLowerCase().includes(searchItem);
		});
		setSearchResult(result);
	}, [searchItem]);

	const TableHeadList = dataTableHead.map((item, index) => {
		return (
			<TableCell key={index} className={classes.styleName} align="center">
				<div className={classes.iconTableHead}>
					<span>{item.content}</span>
					<item.icon />
				</div>
			</TableCell>
		);
	});

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
							{TableHeadList}
						</TableRow>
					</TableHead>
					<TableBody>
						{searchResult.map((item, index) => {
							return (
								<TableRow
									key={index}
									className={classes.tableCell}
								>
									<TableCell
										open={open}
										onClose={handleClose}
										aria-labelledby="alert-dialog-title"
										aria-describedby="alert-dialog-description"
										onClick={handleClickOpen}
										align="center"
									>
										{item.Name}
									</TableCell>
									<TableCell
										open={open}
										onClose={handleClose}
										aria-labelledby="alert-dialog-title"
										aria-describedby="alert-dialog-description"
										onClick={handleClickOpen}
										align="center"
									>
										{item.DeviceId}
									</TableCell>
									<TableCell
										open={open}
										onClose={handleClose}
										aria-labelledby="alert-dialog-title"
										aria-describedby="alert-dialog-description"
										onClick={handleClickOpen}
										align="center"
									>
										{item.Type}
									</TableCell>
									<TableCell
										open={open}
										onClose={handleClose}
										aria-labelledby="alert-dialog-title"
										aria-describedby="alert-dialog-description"
										onClick={handleClickOpen}
										align="center"
									>
										{item.LastActivity}
									</TableCell>
									<TableCell
										open={open}
										onClose={handleClose}
										aria-labelledby="alert-dialog-title"
										aria-describedby="alert-dialog-description"
										onClick={handleClickOpen}
										align="center"
									>
										{item.CreateAt}
									</TableCell>
									<TableCell
										open={open}
										onClose={handleClose}
										aria-labelledby="alert-dialog-title"
										aria-describedby="alert-dialog-description"
										onClick={handleClickOpen}
										align="center"
									>
										{item.Location}
									</TableCell>
									<TableCell
										open={open}
										onClose={handleClose}
										aria-labelledby="alert-dialog-title"
										aria-describedby="alert-dialog-description"
										onClick={handleClickOpen}
										align="center"
									>
										{item.Group}
									</TableCell>
									<TableCell className={classes.iconAction}>
										<item.Actions/>
									</TableCell>
								</TableRow>
							);
						})}


						<Dialog
							open={open}
							onClose={handleClose}
							aria-labelledby="alert-dialog-title"
							aria-describedby="alert-dialog-description"
							className={classes.Dialog}
						>
							<DialogTitle id="alert-dialog-title">
								{"Use Google's location service?"}
							</DialogTitle>
							<DialogContent className={classes.contentDialog}>
								<TableContainer
									component={Paper}
									className={classes.rootTable}
								>
									<TableHead>
										<TableRow
											className={classes.styleTableRow}
										>
											{TableHeadList}
										</TableRow>
									</TableHead>
									<TableBody>
										{Program.map((item, index) => {
											return (
												<TableRow>
													<TableCell align="center">
														1
													</TableCell>
													<TableCell align="center">
														2
													</TableCell>
													<TableCell align="center">
														3
													</TableCell>
													<TableCell align="center">
														4
													</TableCell>
													<TableCell align="center">
														5
													</TableCell>
													<TableCell align="center">
														6
													</TableCell>
													<TableCell align="center">
														7
													</TableCell>
													<TableCell align="center">
														8
													</TableCell>
												</TableRow>
											);
										})}
									</TableBody>
								</TableContainer>
							</DialogContent>
						</Dialog>
					</TableBody>
				</Table>
			</TableContainer>
		</Grid>
	);
}
