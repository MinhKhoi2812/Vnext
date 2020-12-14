import React, { useState } from "react";
import GetApp from "./GetApp.js";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
} from "../tableData.js";

const DialogGetApp = () => {
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="form-dialog-title"
		>
			<DialogContent>
				<GetApp />
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
					Cancel
				</Button>
				<Button onClick={handleClose} color="primary">
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DialogGetApp;
