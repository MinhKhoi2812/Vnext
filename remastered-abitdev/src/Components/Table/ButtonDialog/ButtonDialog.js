import React from "react";
import RouterIcon from "@material-ui/icons/Router";
import TextField from "@material-ui/core/TextField";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  Input,
  MenuItem,
  FormControl,
  Select,
} from "./MUI.js";
import { useStyles } from "./Style.js";

const valueFormData = [
  { name: "Name" },
  { name: "Device ID" },
  { name: "Type" },
  { name: "Last Activity" },
  { name: "Create At" },
  { name: "Location" },
  { name: "Group" },
  { name: "Action" },
];

export default function DialogSelect() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [value, setValue] = React.useState("");
  const [list, setList] = React.useState("");
  const [item, setItem] = React.useState([]);

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleValueAdd = () => {
    setItem((item) => {
      return [...item, setValue];
    });
  };

  const handleChange = (event) => {
    setName(event.target.value || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formControlData = valueFormData.map((item, index) => {
    return (
      <FormControl className={classes.formControl} key={index}>
        <TextField
          key={index}
          onChange={handleValueChange}
          value={value}
          id="outlined-basic"
          label={item.name}
          variant="outlined"
        />
      </FormControl>
    );
  });

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={classes.btnDevices}
      >
        <RouterIcon />
        <span> ADD DEVICE</span>
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>ADD DEVICES</DialogTitle>
        <DialogContent>
          <form className={classes.container}>{formControlData}</form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleValueAdd}
            onClick={handleClose}
            color="primary"
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
