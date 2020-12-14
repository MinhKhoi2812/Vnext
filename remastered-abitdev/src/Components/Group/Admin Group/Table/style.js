import { makeStyles } from "@material-ui/core/styles";

export const useStyles1 = makeStyles((theme) => ({
	root: {
		flexShrink: 0,

		marginTop: "1rem",
	},
	paper: {
		padding: "1rem",
	},
	headTable: {
		display: "flex",
		justifyContent: "space-between",
	},
	inputSearch: {
		marginLeft: "1rem",
		width: "15rem",
		borderRadius: 5,
		outline: "none",
		border: "1px solid #636e72",
	},
	btnAdmin: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		marginRight: 4,
		"& > span": {
			fontWeight: "bold",
			paddingLeft: 3,
		},
		display: "flex",
		justifyContent: "space-between",
	},
	icon: {
		fontSize: "20px",
		marginRight: "12px",
	},
	tableContainer: {
		marginTop: "1rem",
	},
	TableHead: {
		background: "#ccc",
		color: "black",
	},
	tableCellHead: {
		fontWeight: 'bold'
	}
}));
