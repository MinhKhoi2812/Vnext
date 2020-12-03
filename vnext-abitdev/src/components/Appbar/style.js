import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
	root: {},
	menuButton: {},
	title: {
		paddingLeft: "1rem",
		paddingRight: "1rem",
	},
	Appbar: {
		background: "white",
		color: "#636e72",
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		
	},
	toolbar__left: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	toolbar__right: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: '55rem'
	},
	calendar: {
		display: "flex",
		alignItems: "center",
		marginLeft: "2rem",
		marginTop: 2,
	},
	calender__Text: {
		fontSize: 14,
		marginLeft: 4,
		marginTop: 1.5,
	},
	
}));