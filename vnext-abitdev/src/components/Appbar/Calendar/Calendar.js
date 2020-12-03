import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";

import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
	inputDate: {
		border: 'none!important',
		display: 'flex',
		flexDirection: 'row-reverse'
	}
}))

export default function MaterialUIPickers() {
	const classes = useStyles()
	// The first commit of Material-UI
	const [selectedDate, setSelectedDate] = React.useState(
		new Date("2020-12-03T11:14:54")
	);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			
				<KeyboardDatePicker
					className={classes.inputDate}
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
		
		</MuiPickersUtilsProvider>
	);
}
