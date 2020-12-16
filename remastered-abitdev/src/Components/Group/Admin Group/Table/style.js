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
		fontWeight: "bold",
	},
	action: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	iconAction: {
		paddingLeft: "1rem",
		paddingRight: "1rem",
		color: "#636e72",
		cursor: 'pointer'
	},
	deleteiconAction: {
		paddingRight: "1rem",
		color: "#ccc",
		cursor: 'pointer'
	},
	footerTable: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	rowPages: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginTop: "1rem",
		marginRight: "3rem",
		fontSize: '15px',
		cursor: 'pointer'
	},
	numberPages: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginTop: "1rem",
		marginRight: "4rem",
	},
	arrowIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginTop: "1rem",
		cursor: 'pointer',
		color: '#ccc',
		'& > svg' : {
			paddingRight: '1rem'
		}
	},
}));
