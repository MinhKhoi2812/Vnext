import React, { useState, useEffect } from "react";

import { HorizontalBar } from "react-chartjs-2";

const BarChart = () => {
	const [data, setData] = useState([]);
	const [percent, setPercent] = useState(1);

	useEffect(() => {
		setPercent(9);
		setData({
			labels: ["Device1", "Device2", "Device3"],
			datasets: [
				{
					label: "Device1",
					data: [6, 7, 7],
					backgroundColor: "#2ecc71",
					fill: false,
					barPercentage: 2.5,
					barThickness: 10,
					maxBarThickness: 10,
					minBarLength: 2,
				},
				{
					label: "Device2",
					data: [3, 8, 9],
					backgroundColor: "#1abc9c",
					fill: false,
					barPercentage: 2.5,
					barThickness: 10,
					maxBarThickness: 10,
					minBarLength: 2,
				},
				{
					label: "Device3",
					data: [2, 3, 3],
					backgroundColor: "#00b894",
					fill: false,
					barPercentage: 2.5,
					barThickness: 10,
					maxBarThickness: 10,
					minBarLength: 2,
				},
			],
		});
	}, [setPercent, setData]);
	return (
		<HorizontalBar
			width={50}
			height={300}
			data={data}
			options={{ maintainAspectRatio: false }}
		/>
	);
};

export default BarChart;
