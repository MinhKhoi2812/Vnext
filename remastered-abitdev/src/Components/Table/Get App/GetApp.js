import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	startDate: {
		display: "flex",
		alignItems: "center",
		"& > p": {
			fontSize: "14px",
			marginTop: 16,
			marginRight: 54,
		},
	},
	endDate: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		"& > p": {
			fontSize: "14px",
			marginTop: 16,
			marginRight: 54,
		},
	},
}));

const GetApp = () => {
	const classes = useStyles();
	const [selectedDate, setSelectedDate] = React.useState(new Date());
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justify="space-around" className={classes.root}>
				<div className={classes.startDate}>
					<Typography>Start Date:</Typography>
					<KeyboardDatePicker
						disableToolbar
						variant="inline"
						format="MM/dd/yyyy"
						margin="normal"
						id="date-picker-inline"
						value={selectedDate}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							"aria-label": "change date",
						}}
					/>
				</div>
				<div className={classes.endDate}>
					<Typography>End Date:</Typography>
					<KeyboardDatePicker
						disableToolbar
						variant="inline"
						format="MM/dd/yyyy"
						margin="normal"
						id="date-picker-inline"
						value={selectedDate}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							"aria-label": "change date",
						}}
					/>
				</div>
			</Grid>
		</MuiPickersUtilsProvider>
	);
};

export default GetApp;
