import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		height: '79px',
	},
	headerLeft: {
		display: "flex",
		color: "#636e72",
		alignItems: "center",
		marginBottom: "2rem",
		marginLeft: "1rem",
		"& > p": {
			fontSize: "18px",
		},
	},
	headerRight: {
		display: "flex",
		alignItems: "center",
		marginBottom: "2rem",
		padding: '1rem'
	},
	headerRight__admin: {
		display:'flex',
		paddingRight: '1rem',
		color:"#636e72",
		"& > p": {
			paddingLeft: '1rem'
		}
	},
	headerRight__user: {
		display: 'flex',
		paddingRight: '1rem',
		color:"#636e72",
		"& > p": {
			paddingLeft: '1rem'
		}

	},
	devices:{
		display:'flex',
		paddingRight: '1rem',
		color:"#636e72",
		"& > p": {
			paddingLeft: '1rem'
		}
	}
}));
