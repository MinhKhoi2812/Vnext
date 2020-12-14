import React, { useState, useEffect } from "react";
import { useStyles } from "../styles.js";
import { Pie, Doughnut } from "react-chartjs-2";

const PieChart = () => {
	const [data, setData] = useState([]);
	const [percent, setPercent] = useState(1);
	useEffect(() => {
		setPercent(9);
		setData({
			labels: ["Device1", "Device2", "Device3"],
			datasets: [
				{
					data: [2, 3, 4],
					backgroundColor: ["#2ecc71", "#0984e3", "#a29bfe"],
					fill: false,
				},
			],
		});
	}, [setPercent, setData]);
	return <Pie data={data} width={100} height={100} />;
};

export default PieChart;
