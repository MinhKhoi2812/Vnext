import React from "react";
import { useStyles } from "./style.js";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import TranslateIcon from "@material-ui/icons/Translate";
const options = ["English", "Japanese"];

const ButtonLanguages = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const handleClick = () => {
		console.info(`You clicked ${options[selectedIndex]}`);
	};

	const handleMenuItemClick = (event, index) => {
		setSelectedIndex(index);
		setOpen(false);
	};

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<ButtonGroup
				ref={anchorRef}
				onClick={handleToggle}
				className={classes.btnGroup}
			>
				<Button className={classes.btnClick} onClick={handleClick}>
					<TranslateIcon className={classes.transIcon} />
					<div className={classes.textLanguages}>
						{options[selectedIndex]}
					</div>

					<ArrowDropDownIcon className={classes.ArrIcon} />
				</Button>
			</ButtonGroup>
			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === "bottom"
									? "center top"
									: "center bottom",
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									id="split-button-menu"
									className={classes.menuList}
								>
									{options.map((option, index) => (
										<MenuItem
											key={option}
											disabled={index === 2}
											selected={index === selectedIndex}
											className={classes.textMenu}
											onClick={(event) =>
												handleMenuItemClick(
													event,
													index
												)
											}
										>
											{option}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</div>
	);
};

export default ButtonLanguages;
