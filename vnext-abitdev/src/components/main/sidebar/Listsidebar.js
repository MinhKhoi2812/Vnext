import React, { useState } from "react";
import { useStyles } from "./style.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import {
	ExpandLess,
	ExpandMore,
	StarBorder,
	HomeIcon,
	DevicesIcon,
	EventIcon,
	StorageIcon,
	PaymentIcon,
	EcoIcon,
	AllOutOutlinedIcon,
	SettingsInputSvideoSharpIcon,
	SettingsSharpIcon,
	PersonOutlineSharpIcon,
	GetAppSharpIcon,
	AccountBoxSharpIcon,
	DnsSharpIcon,
} from "./Icon.js";

const Listsidebar = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(true);
	const [render, setRender] = useState(true);
	const [data, setOnData] = useState(true);
	const [account, setAccount] = useState(true);
	const handleClick = () => {
		setOpen(!open);
	};

	const rederHandleClick = () => {
		setRender(!render);
	};

	const dataHandleClick = () => {
		setOnData(!data);
	};
	const accountHandleClick = () => {
		setAccount(!account);
	};

	return (
		<div>
			<ListItem button button onClick={handleClick}>
				<ListItemIcon>
					<DevicesIcon />
				</ListItemIcon>
				<ListItemText
					primary="All Devices"
					className={classes.textPrimary}
				/>
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							<DevicesIcon />
						</ListItemIcon>
						<ListItemText
							primary="All Devices"
							className={classes.textSubPrimary}
						/>
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							<EventIcon />
						</ListItemIcon>
						<ListItemText
							primary="Events"
							className={classes.textSubPrimary}
						/>
					</ListItem>
				</List>
			</Collapse>

			<ListItem button onClick={rederHandleClick}>
				<ListItemIcon>
					<SettingsInputSvideoSharpIcon />
				</ListItemIcon>
				<ListItemText
					primary="Services"
					className={classes.textPrimary}
				/>
				{render ? <ExpandLess /> : <ExpandMore />}
			</ListItem>

			<Collapse in={render} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							<AllOutOutlinedIcon />
						</ListItemIcon>
						<ListItemText
							primary="External API"
							className={classes.textSubPrimary}
						/>
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							<PaymentIcon />
						</ListItemIcon>
						<ListItemText
							primary="Payment"
							className={classes.textSubPrimary}
						/>
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							<EcoIcon />
						</ListItemIcon>
						<ListItemText primary="AI " className={classes.textSubPrimary}/>
					</ListItem>
				</List>
			</Collapse>

			<ListItem button onClick={dataHandleClick}>
				<ListItemIcon>
					<StorageIcon />
				</ListItemIcon>
				<ListItemText primary="Data" className={classes.textPrimary} />
				{data ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={data} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							<StarBorder />
						</ListItemIcon>
						<ListItemText
							primary="External API"
							className={classes.textSubPrimary}
						/>
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							<StarBorder />
						</ListItemIcon>
						<ListItemText
							primary="Payment"
							className={classes.textSubPrimary}
						/>
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							<StarBorder />
						</ListItemIcon>
						<ListItemText
							primary="AI"
							className={classes.textSubPrimary}
						/>
					</ListItem>
				</List>
			</Collapse>

			<ListItem button onClick={accountHandleClick}>
				<ListItemIcon>
					<SettingsSharpIcon />
				</ListItemIcon>
				<ListItemText
					primary="Admin Settings"
					className={classes.textPrimary}
				/>
				{data ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={account} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							<PersonOutlineSharpIcon />
						</ListItemIcon>
						<ListItemText
							primary="Set Public Information"
							className={classes.textSubPrimaryInfo}
						/>
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							<GetAppSharpIcon />
						</ListItemIcon>
						<ListItemText
							primary="Data Download"
							className={classes.textSubPrimary}
						/>
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							<AccountBoxSharpIcon />
						</ListItemIcon>
						<ListItemText
							primary="Group Management"
							className={classes.textSubPrimary}
						/>
					</ListItem>
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							<DnsSharpIcon />
						</ListItemIcon>
						<ListItemText
							primary="Device List"
							className={classes.textSubPrimary}
						/>
					</ListItem>
				</List>
			</Collapse>
		</div>
	);
};

export default Listsidebar;
