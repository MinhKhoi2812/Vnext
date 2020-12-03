import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		
		marginRight: '2rem'
		
	},
	btnGroup: {
		display: "flex!important",
		alignItems: "center",
		background: "white",
		boxShadow: "0 0 0 white",
		
		width: "100%",
	},
	
	btnClick: {
		"&:hover": {
			textDecoration: "none",
			backgroundColor: "white!important",
		},
		display: "flex",
		alignItems: "center",

		justifyContent: "space-between",
	},
	transIcon: {
		fontSize: "17px",

		paddingLeft: 2,
	},
	textLanguages: {
		fontSize: "13px",
		paddingLeft: "0.25rem",
		paddingTop: "0.25rem",
		paddingBottom: "0.25rem",
		textTransform: "capitalize",
	},
	ArrIcon: {
		marginleft: 6,
		paddingLeft: 2,
	},
	menuList:{
		marginTop: '3px!important'
	},
	textMenu: {
		fontSize: "13px!important",
		paddingLeft: '2.25rem!important',
		paddingRight: '2.25rem!important',

	}
}));
