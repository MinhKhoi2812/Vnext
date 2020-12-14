import React from "react";
import { useStyles } from "./style.js";

import { dataList } from "./cartCustom.js";

const Dashboard = () => {
	const classes = useStyles();

	const listCartCustom = dataList.map((item, index) => {
		return (
			<div className={classes.cardDiff}>
				<div className={classes.textCardDiff}>{item.content}</div>
				<div className={classes.iconColumn}>
					<item.bigIcon  />
					<div className={classes.solar}>
						<item.smallIcon  />
						<span >{item.custom}</span>
					</div>
				</div>
			</div>
		);
	});
	return (
		<div className={classes.root}>
			<div className={classes.card}>
				<div className={classes.card__textTop}>
					<span>Number of Devices</span>
					<span className={classes.active}>0</span>
				</div>

				<div className={classes.card__textBottom}>
					<span>Activating</span>
					<span className={classes.active}>0</span>
				</div>
			</div>
			{listCartCustom}
		</div>
	);
};

export default Dashboard;
