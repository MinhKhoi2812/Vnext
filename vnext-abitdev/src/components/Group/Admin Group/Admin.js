import React from "react";
import TableDatas from "./Table/Table.js";
import Header from "./Header Group/Header.js";
import Navbar from "./NavBar Group/Navbar.js";
const Admin = () => {
	return (
		<div>
			<Header />
			<Navbar />
			<TableDatas />
		</div>
	);
};

export default Admin;
