import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
	},
	TableContainer: {
		marginBottom: "2rem",
	},
	textTableHeader: {
		display: "flex",
		justifyContent: "center",
		marginTop: "1rem",
		fontSize: "25px",
		marginBottom: "2rem",
	},
	btn: {
		display: "flex",
		alignItems: "center",
		width: "80%",
		justifyContent: "space-between",
		marginBottom: "2rem",
	},
	textInput: {
		padding: "0.75rem",
		border: "1px solid rgba(0, 0, 0, 0.23)",
		outline: "none",
		borderRadius: "5px",
		width: "15rem",
		height: "1.5rem",
		marginLeft: "-7rem",
	},
	Cell: {
		border: "1px solid rgba(0, 0, 0, 0.23)",
		fontWeight: "bold",
	},
	styleTableRow: {
		background: "#7e7e7e",
	},
	iconHeader: {
		display: "flex",
		alignItems: "center",
		"& > p": {
			fontWeight: "bold",
			paddingRight: "0.25rem",
			marginLeft:'1rem'
		},
	},
	iconAction: {
		"&  > svg": {
			cursor: "pointer",
			color: "#636e72",
			marginLeft: "1rem",
		},
	},
	stylesCell: {
		border: "1px solid rgba(0, 0, 0, 0.23)",
	},
	iconHeaderAct: {
		"&>p": { fontWeight: "bold" },
	},
}));
