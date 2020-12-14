import React, { useState, useEffect } from "react";
import API from "../../../../axios.config.js";
import Paper from "@material-ui/core/Paper";

import { useStyles1, useStyles2 } from "./style.js";
import HeadTable from "./HeadTable.js";
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
	TableHead,
} from "./data.js";

const url = `https://2mhmjkchx5.execute-api.ap-southeast-1.amazonaws.com/dev`;

const TableDatas = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await API.post(
				`${url}/orion/user/getGroupUserList`,
				{
					group_id: "3",
					limit: 4,
					page: 1,
					field: "user_name",
					typeOrder: "ASC",
				}
			)

				.then(({ data: { data } }) => {
					setData(data);
				})
				.catch((err) => console.log(err));
		};

		fetchData();
	}, []);

	const classes = useStyles1();
	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<HeadTable />
				<TableContainer component={Paper} className={classes.tableContainer}>
					<Table>
						<TableHead className={classes.TableHead}>
							<TableRow>
								<TableCell className={classes.tableCellHead} align="center">Name</TableCell>
								<TableCell className={classes.tableCellHead} align="center">Email</TableCell>
								<TableCell className={classes.tableCellHead} align="center">Phone Number</TableCell>
								<TableCell className={classes.tableCellHead} align="center">Address</TableCell>
								<TableCell className={classes.tableCellHead} align="center">Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map((item) => {
								return (
									<TableRow key={item.user_id}>
										<TableCell align="center">{item.user_name}</TableCell>
										<TableCell align="center">
											{item.mail_address}
										</TableCell>
										<TableCell align="center">
											{item.phone_number}
										</TableCell>
										<TableCell align="center">{item.address}</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</div>
	);
};

export default TableDatas;
