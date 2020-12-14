import React from "react";
import SignIn from "./SignIn/Signin.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Login = () => {
	return (
		<div>
			<SignIn/>	
		</div>
	);
};

export default Login;
