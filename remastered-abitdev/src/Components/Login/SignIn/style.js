import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
	body: {},
	root: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		flexDirection: "column",
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
	headerLogin: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	lockIcon: {
		color: "white",
		background: "#d63031",
		padding: "0.25rem",
		borderRadius: "7rem",
	},
	textLogin: {
		marginTop: "1rem",
		marginBottom: "1rem",
		fontSize: "1.4rem",
	},
	inputField: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	User: {
		width: "26rem!important",
		outline: "none!important",
	},
	Password: { width: "26rem!important", outline: "none!important" },
	btnLogin: {
		width: "26rem!important",
		marginTop: "1rem",
	},
	textSignUp: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: "1rem",
		width: '26rem!important'
	},
	textForgot: {
		 color: '#0984e3'
	},
	register: {
		color: '#0984e3'
	},
}));