import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {},
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  btnDevices: {
    marginRight: "-8rem",
    marginBottom: 5,
    "&>span": {
      fontSize: "14px",
      padding: "5px",
      width: "7.5rem",
    },
  },
}));
