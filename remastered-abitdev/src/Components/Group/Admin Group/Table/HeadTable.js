import React from "react";
import { useStyles1 } from "./style.js";
import Button from "@material-ui/core/Button";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const HeadTable = () => {
	const classes = useStyles1();

	return (
		<div>
			<div className={classes.headTable}>
				<input
					type="text"
					placeholder="search..."
					className={classes.inputSearch}
				/>
				<div className={classes.btnAdmin}>
					<Button variant="contained" className={classes.button}>
						<PlaylistAddCheckIcon className={classes.icon} />
						<span>ADMIN PERMISSION</span>
					</Button>
					<Button variant="contained" className={classes.button}>
						<PersonAddIcon className={classes.icon} />
						<span>ADD ADMIN</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default HeadTable;
