import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		alignItems: "center",
		marginTop: "5rem",
		marginLeft: "6rem",
	},
	horizontalBar: {
		width: "563px",
		height: "237px",
		marginBottom: "5rem",
	},
	PieChart: {
		marginLeft: "14rem",
		marginBottom: "5rem",
		width: "270px",
		margin: "auto"
	},
}));
