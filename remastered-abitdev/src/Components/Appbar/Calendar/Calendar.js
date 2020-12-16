import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import { DatePicker } from "@material-ui/pickers";
import style from "./style.css";

import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
	inputDate: {
		"&global": {
			".MuiInput-underline:before": {
				content: "",
			},
		},
		border: "none!important",
		display: "flex",
		flexDirection: "row-reverse",
		outline: "none!important",
		paddingLeft: 1,
	},
}));

export default function MaterialUIPickers() {
	const classes = useStyles();
	// The first commit of Material-UI
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				//clearable
				autoOk
				//variant="inline"
				inputVariant="standard"
				value={selectedDate}
				onChange={(date) => handleDateChange(date)}
				minDate={new Date()}
				InputAdornmentProps={{ position: "start" }}
				className={classes.inputDate}
			/>
		</MuiPickersUtilsProvider>
	);
}
