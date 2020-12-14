import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		alignItem: "center",
		justifyContent: "space-around",
	},
	card: {
		display: "flex",
		border: "1px solid #ccc",
		width: "226px",
		textAlign: "center",
		marginTop: "2rem",
		marginLeft: "12px",
		borderRadius: "10px",
		flexDirection: "column",
	},
	card__textTop: {
		paddingTop: "25px",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
	},
	card__textBottom: {
		paddingTop: "25px",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		paddingBottom: "10px",
	},
	active: {
		fontSize: "22px!important",
		fontWeight: "bold!important",
		color: "black",
	},
	cardDiff: {
		display: "flex",
		border: "1px solid #ccc",
		width: "226px",
		textAlign: "center",
		marginTop: "2rem",
		borderRadius: "10px",
		flexDirection: "column",
	},
	textCardDiff: {
		textAlign: "center",
		paddingTop: "25px",
		fontSize: "20px",
	},
	iconColumn: {
		paddingTop: "8px",
		"& > svg": {
			display: "flex!important",
			fontSize: "35px!important",
			justifyContent: "flex-start!important",
			marginLeft: "1rem!important",
		},
	},

	solar: {
		display: "flex",
		marginLeft: "1.3rem",
		marginTop: "1rem",
		justifyContent: "space-between",
		"& > svg": {
			fontSize: "35px",
		},
		"& > span": {
			marginRight: "1rem",
			fontSize: "23px",
		},
	},
	sunnyIcon: {
		fontSize: "35px",
	},
	Custom: {
		marginRight: "1rem",
		fontSize: "18px",
	},
}));
