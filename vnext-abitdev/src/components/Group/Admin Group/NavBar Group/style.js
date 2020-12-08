import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
	root:{
		marginLeft: 8
	},
	button: {
		paddingLeft: '2rem',
		paddingRight: '2rem',
		background: "#ccc",
		borderRadius: 0,
		border:'none'
	}
}))