import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100%",
		maxWidth: 260,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
	listsidebar: {
		overflow: "scroll",
		height: "39rem",
	},
	textPrimary: {
		"& > span": {
			fontSize: "15px!important",
			color: "black",
		},
	},
	textSubPrimary: {
		"& > span": {
			fontSize: "14px!important",
		},
	},
	textSubPrimaryInfo: {
		"& > span": {
			fontSize: "14px!important",
			width: "159px!important",
		},
	},
	textPrimaryLink: {
		"& > span": {
			textDecoration: "none!important",
		},
	},
	textSubPrimaryLink: {
		"& > span": {
			textDecoration: "none!important",
			fontSize: "14px!important",
		},
	},
	Link:{
		textDecoration: 'none',
		color:'#636e72',
	}
}));
