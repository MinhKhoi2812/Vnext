import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	textGroup: {
		fontSize: "18px",
		fontWeight: "bold",
		color: "#7f8c8d",
		paddingLeft: 10,
		paddingTop: 10,
		paddingBottom: 10,
	},
	searchInput: {
		paddingLeft: 7,
		paddingRight: 7,
		paddingBottom: 10,
		paddingTop: 10,
		marginLeft: 14,
		marginRight: 10,
		marginBottom: 10,
		outline: "none",
		paddingRight: 10,
		border: "1px solid #636e72",
		borderRadius: 4,
		width: "15rem",
	},
	textItem: {
		"& > span": {
			fontSize: "13px",
			color: "#2c3e50",
			fontWeight: "bold",
			paddingRight: "5rem",
			display: "block",
		},
	},
	listItem: {
		"&:hover": {
			background: "#ccc!important",
		},
	},
	link:{
		textDecoration: 'none'
	}
}));
