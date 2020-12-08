import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import RouterIcon from "@material-ui/icons/Router";
import SortIcon from "@material-ui/icons/Sort";
import FilterListIcon from "@material-ui/icons/FilterList";
import SettingsIcon from "@material-ui/icons/Settings";
import GetAppIcon from "@material-ui/icons/GetApp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CreateIcon from "@material-ui/icons/Create";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export {
	Table,
	TableContainer,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Paper,
	Grid,
	Button,
	ButtonGroup,
	ArrowDropDownIcon,
	SearchIcon,
	RouterIcon,
	SortIcon,
	FilterListIcon,
	SettingsIcon,
	GetAppIcon,
	VisibilityIcon,
	CreateIcon,
	DeleteForeverIcon,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
};

export const dataTableHead = [
	{ content: "Name", icon: () => <SortIcon /> },
	{ content: "Device ID", icon: () => <SortIcon /> },
	{ content: "Type", icon: () => <FilterListIcon /> },
	{ content: "Last Activity", icon: () => <SortIcon /> },
	{ content: "Create At", icon: () => <SortIcon /> },
	{ content: "Location", icon: () => <div></div> },
	{ content: "Group", icon: () => <FilterListIcon /> },
	{ content: "Action", icon: () => <div></div> },
];

export const Program = [
	{
		Name: "kansui001",
		DeviceId: 1,
		Type: "kansui",
		LastActivity: () => <div></div>,
		CreateAt: () => <div></div>,
		Location: () => <div></div>,
		Group: 4,
		Actions: () => (
			<div>
				<SettingsIcon />
				<GetAppIcon />
				<VisibilityIcon />
				<CreateIcon />
				<DeleteForeverIcon />
			</div>
		),
	},
	{
		Name: "smakui001",
		DeviceId: 1,
		Type: "smakui",
		LastActivity: () => <div></div>,
		CreateAt: () => <div></div>,
		Location: () => <div></div>,
		Group: 4,
		Actions: () => (
			<div>
				<SettingsIcon />
				<GetAppIcon />
				<VisibilityIcon />
				<CreateIcon />
				<DeleteForeverIcon />
			</div>
		),
	},
	{
		Name: "sui001",
		DeviceId: 1,
		Type: "sui",
		LastActivity: () => <div></div>,
		CreateAt: () => <div></div>,
		Location: () => <div></div>,
		Group: 4,
		Actions: () => (
			<div>
				<SettingsIcon />
				<GetAppIcon />
				<VisibilityIcon />
				<CreateIcon />
				<DeleteForeverIcon />
			</div>
		),
	},
	{
		Name: "uryou001",
		DeviceId: 1,
		Type: "uryou",
		LastActivity: () => <div></div>,
		CreateAt: () => <div></div>,
		Location: () => <div></div>,
		Group: 4,
		Actions: () => (
			<div>
				<SettingsIcon />
				<GetAppIcon />
				<VisibilityIcon />
				<CreateIcon />
				<DeleteForeverIcon />
			</div>
		),
	},
];
