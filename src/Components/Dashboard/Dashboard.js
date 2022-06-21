import React from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import "./Dashboard.css";
import Dashscreen from "./Dashscreen/Dashscreen";

// import SideMenu from "./SideMenu/SideMenu";

export default function Dashboard() {
	let { path, url } = useRouteMatch();
	const location = useLocation();
	console.log(location.state.admin);
	return (
		<div
			className='d-flex dashboard'
			style={{
				height: "100vh",
			}}>
			{location.state.admin === true ? "admin" : "normal user"}
		</div>
	);
}
