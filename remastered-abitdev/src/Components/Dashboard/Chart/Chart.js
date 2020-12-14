import React, { useState, useEffect } from "react";
import { useStyles } from "./styles.js";
import HorizontalBar from "./Horizontal Bar/HorizontalBar.js";
import PieChart from "./Pie Chart/PieChart.js";

const Chart = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.horizontalBar}>
				<HorizontalBar />
			</div>
			<div className={classes.PieChart}>
				<PieChart />
			</div>
		</div>
	);
};

export default Chart;
