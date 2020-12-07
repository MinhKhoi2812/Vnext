import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	rootItem: {
		marginTop: "2rem",
		width: '100%'
	},
	textInput: {
		padding: "0.75rem",
		border: "1px solid #636e72",
		outline: "none",
		borderRadius: "5px",
		width: "15rem",
		marginLeft: "1rem",
	},
	search: {
		borderRadius: "5px",
		border: "1px solid #636e72",
	},
	btn:{
		display: 'flex',
		alignItems:'center',
		justifyContent: 'space-between'
	},
	buttonGroup: {
		marginLeft: '-40rem',
		marginBottom: '2rem'
	},
	buttonDevice: {
		marginBottom: '2rem',
		marginTop: '-4.5rem',
		marginLeft: '67rem',
		display:'flex',
		alignItems: 'center',
		'& > span' : {
			fontSize: '13px',
			fontWeight: 'bold'
		}
	},
	rootTable: {
		width: "98%!important",
	},

	table: {
		border: "1px solid #636e72",
	},
	styleTableRow: {
		background: "#ccc",
	},
	styleName: {
		textTransform: "capitalize!important",
		fontWeight: "bold!important",
		paddingLeft: "5px!important",
		paddingRight: "10px!important",
		display:'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		'& > span' : {
			textAlign: 'center',
			paddingBottom: '2px'
		},
		lineHeight: '1em',
	},
	styleDevice: {
		paddingLeft: "1%!important",
		paddingRight: "1%!important",
		textTransform: "capitalize!important",
		fontWeight: "bold!important",
		display:'flex',
		
	},
	styleType: {
		paddingLeft: "24px!important",
		paddingRight: "23px!important",
		textTransform: "capitalize!important",
		fontWeight: "bold!important",
		display:'flex',
		alignItems: 'center',
	},
}));