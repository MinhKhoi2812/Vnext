import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		alignItems: "center",
		marginRight: "0rem",
		marginLeft: "2rem",
	},
	textAccount: {
		display: "block",
		lineHeight: "0.52rem",
	},
	textAccount__top: {
		fontSize: "13px",
	},
	textAccount__bot: {
		width: "6rem",
		fontSize: "12px",
	},
	userIcon: {
		background: "#ccc",
		padding: "0.55rem",
		marginLeft: "10px",
	},
}));
