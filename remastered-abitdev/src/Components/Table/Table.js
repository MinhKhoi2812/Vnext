import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { useStyles } from "./style.js";
import Typography from "@material-ui/core/Typography";
import ButtonDialog from "./ButtonDialog/ButtonDialog.js";
import API from "../../axios.config.js";
import GetApp from "./Get App/GetApp.js";
import Collapse from "./Collapse Table/Collapse.js";
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
} from "./TableData.js";

import { withStyles } from "@material-ui/core/styles";

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: "#ecf0f1",
		},
	},
}))(TableRow);

const url = `https://2mhmjkchx5.execute-api.ap-southeast-1.amazonaws.com/dev`;

const TableMain = () => {
	const [searchItem, setSearchItem] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [data, setData] = useState([]);
	const [item, setItem] = useState([]);
	const [open, setOpen] = React.useState(false);
	const [copen, setCopen] = useState(false);
	const [fullWidth, setFullWidth] = React.useState(true);
	const [maxWidth, setMaxWidth] = React.useState("xl");
	const classes = useStyles();

	const handleChange = (e) => {
		setSearchItem(e.target.value);
	};

	const handleClickCopen = () => {
		setCopen(true);
	};

	const handleCloseCopen = () => {
		setCopen(false);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleMaxWidthChange = (event) => {
		setMaxWidth(event.target.value);
	};

	const handleFullWidthChange = (event) => {
		setFullWidth(event.target.checked);
	};

	useEffect(() => {
		const fetchData = async () => {
			const result = await API.post(`${url}/orion/device/getDevices`, {
				limit: 5,
				page: 1,
				field: "device_id",
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
			return items.name.toLowerCase().includes(searchItem.toLowerCase());
		});
		setSearchResult(result);
		console.log(result);
	}, [item, searchItem]);

	return (
		<Box className={classes.root}>
			<Typography className={classes.textTableHeader}>Devices</Typography>
			<Box className={classes.btn}>
				<ButtonGroup className={classes.fixInput}>
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
				<Box>
					<ButtonDialog />
				</Box>
			</Box>
			<TableContainer className={classes.TableContainer}>
				<Table border="1">
					<TableHead>
						<TableRow className={classes.styleTableRow}>
							<TableCell
								className={classes.stylesCell}
								align="center"
							>
								<Box className={classes.iconHeader}>
									<Typography>Name</Typography>
									<SortIcon />
								</Box>
							</TableCell>
							<TableCell
								className={classes.stylesCell}
								align="center"
							>
								<Box className={classes.iconHeaderAct}>
									<Typography>Device ID</Typography>
								</Box>
							</TableCell>
							<TableCell
								className={classes.stylesCell}
								align="center"
							>
								<Box className={classes.iconHeader}>
									<Typography>Type</Typography>
									<FilterListIcon />
								</Box>
							</TableCell>
							<TableCell
								className={classes.stylesCell}
								align="center"
							>
								<Box className={classes.iconHeader}>
									<Typography>Last Activity</Typography>
									<SortIcon />
								</Box>
							</TableCell>
							<TableCell
								className={classes.stylesCell}
								align="center"
							>
								<Box className={classes.iconHeader}>
									<Typography>Create At</Typography>
									<SortIcon />
								</Box>
							</TableCell>
							<TableCell
								className={classes.stylesCell}
								align="center"
							>
								<Box className={classes.iconHeaderAct}>
									<Typography>Location</Typography>
								</Box>
							</TableCell>
							<TableCell
								className={classes.stylesCell}
								align="center"
							>
								<Box className={classes.iconHeader}>
									<Typography>Group</Typography>
									<FilterListIcon />
								</Box>
							</TableCell>
							<TableCell
								className={classes.stylesCell}
								align="center"
							>
								<Box className={classes.iconHeaderAct}>
									<Typography>Actions</Typography>
								</Box>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{searchResult.map((item) => {
							return (
								<StyledTableRow key={item.device_id}>
									<TableCell
										className={classes.Cell}
										align="center"
									>
										{item.name}
									</TableCell>
									<TableCell
										className={classes.Cell}
										align="center"
									>
										{item.device_type}
									</TableCell>
									<TableCell
										className={classes.Cell}
										align="center"
									>
										{item.device_type}
									</TableCell>
									<TableCell
										className={classes.Cell}
									></TableCell>
									<TableCell
										className={classes.Cell}
									></TableCell>
									<TableCell
										className={classes.Cell}
									></TableCell>
									<TableCell
										className={classes.Cell}
										align="center"
									>
										{item.group_id}
									</TableCell>
									<TableCell
										className={classes.Cell}
										align="center"
									>
										<Box className={classes.iconAction}>
											<SettingsIcon />
											<GetAppIcon
												onClick={handleClickOpen}
											/>
											<VisibilityIcon
												onClick={handleClickCopen}
											/>
											<CreateIcon />
											<DeleteForeverIcon />
										</Box>
									</TableCell>
								</StyledTableRow>
							);
						})}
						<Dialog
							open={open}
							onClose={handleClose}
							aria-labelledby="form-dialog-title"
						>
							<DialogContent>
								<GetApp />
							</DialogContent>
							<DialogActions>
								<Button onClick={handleClose} color="primary">
									Cancel
								</Button>
								<Button onClick={handleClose} color="primary">
									Save
								</Button>
							</DialogActions>
						</Dialog>
						<Dialog
							fullWidth={fullWidth}
							maxWidth={maxWidth}
							open={copen}
							onClose={handleCloseCopen}
							aria-labelledby="form-dialog-title"
						>
							<DialogContent>
								<Collapse />
							</DialogContent>
							<DialogActions>
								<Button
									onClick={handleCloseCopen}
									color="primary"
								>
									Cancel
								</Button>
							</DialogActions>
						</Dialog>
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default TableMain;
