import React, { useSate, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import API from "../../../axios.config.js";

const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const url = `https://2mhmjkchx5.execute-api.ap-southeast-1.amazonaws.com/dev`;

function Collapses() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);

  const handleClick = (e) => {
    setOpen(!open);
    console.log("e", e);
  };

  useEffect(() => {
    const fetchData = async () => {
      await API.post(`${url}/orion/device/getDeviceData`, {
        device_id: "3",
        limit: 10,
      }).then(({ data: { data } }) => {
        console.log(data);
        setData(data);
      });
    };
    fetchData();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell component="th" align="center">
              device_type
            </TableCell>
            <TableCell align="center">device_id</TableCell>
            <TableCell align="center">create_at</TableCell>
            <TableCell align="center">time</TableCell>
            <TableCell align="center">time_stamp</TableCell>
            <TableCell align="center">data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <>
                <TableRow key={item.device_id}>
                  <TableCell align="center" component="th" scope="row">
                    {item.Payload.device_type}
                  </TableCell>
                  <TableCell align="center">{item.Payload.device_id}</TableCell>
                  <TableCell align="center">
                    {item.Payload.created_at}
                  </TableCell>
                  <TableCell align="center">{item.Payload.time}</TableCell>
                  <TableCell align="center">
                    {item.Payload.data.time_stamp}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => handleClick(item)}
                    >
                      {open ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                  >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <Box margin={1}>
                        <Typography variant="h6" gutterBottom component="div">
                          Data
                        </Typography>
                        <Table size="small" aria-label="purchases">
                          <TableHead>
                            <TableRow>
                              <TableCell>flood_level</TableCell>
                              <TableCell>battery</TableCell>
                              <TableCell>current_state</TableCell>
                              <TableCell>profile</TableCell>
                              <TableCell>profle_ver</TableCell>
                              <TableCell>temperature</TableCell>
                              <TableCell>time_interval</TableCell>
                              <TableCell>time_stamp</TableCell>
                              <TableCell>location</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {data.map((item) => {
                              return (
                                <TableRow>
                                  <TableCell>
                                    {item.Payload.data.start_level}
                                  </TableCell>
                                  <TableCell>
                                    {item.Payload.data.battery}
                                  </TableCell>
                                  <TableCell></TableCell>
                                  <TableCell>{item.Payload.profile}</TableCell>
                                  <TableCell>
                                    {item.Payload.data.profile_ver}
                                  </TableCell>
                                  <TableCell></TableCell>
                                  <TableCell>
                                    {item.Payload.data.time_interval}
                                  </TableCell>
                                  <TableCell>{item.Payload.data.time_stamp}</TableCell>
                                  <TableCell>{item.Payload.data.location.name}</TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Collapses;
