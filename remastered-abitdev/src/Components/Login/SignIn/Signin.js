import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import LockIcon from "@material-ui/icons/Lock";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./style.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Auth, Amplify } from "aws-amplify";
import Navbar from "../../Appbar/Appbar.js";

Amplify.configure({
	Auth: {
		region: "ap-southeast-1",
		userPoolId: "ap-southeast-1_rogZ4A2uC",
		userPoolWebClientId: "g37utk3tg8f2rncm5gtln0uov",
	},
});

const initialFormState = {
	username: "oriontesting12@gmail.com",
	password: "Abitteam@123",
	authCode: "",
	formType: "SignIn",
};

const Login = () => {
	const [formState, setFormState] = useState(initialFormState);
	const classes = useStyles();
	function handleChange(e) {
		e.persist();
		setFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
		console.log(e.target.value);
	}

	const { formType } = formState;
	async function signIn() {
		const { username, password } = formState;
		await Auth.signIn({ username, password });
		setFormState(() => ({ ...formState, formType: "Signed In" }));
	}
	return (
		<div>
			{formType === "SignIn" && (
				<div className={classes.root}>
					<div className={classes.headerLogin}>
						<LockIcon className={classes.lockIcon} />
						<Typography className={classes.textLogin}>
							Login
						</Typography>
					</div>

					<form action="" className={classes.inputField}>
						<TextField
							type="text"
							name="username"
							onChange={handleChange}
							placeholder="username"
							id="outlined-password-input"
							label="UserName"
							autoComplete="current-password"
							variant="outlined"
							className={classes.User}
						/>
						<TextField
							id="outlined-password-input"
							label="Password"
							type="password"
							autoComplete="current-password"
							variant="outlined"
							onChange={handleChange}
							placeholder="password"
							className={classes.Password}
						/>
						<Button
							color="primary"
							variant="contained"
							className={classes.btnLogin}
							onClick={signIn}
						>
							Sign In
						</Button>
					</form>
				</div>
			)}
			{formType === "Signed In" && <Navbar />}
		</div>
	);
};

export default Login;
