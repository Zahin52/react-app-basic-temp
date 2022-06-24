import React from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Map from "../Map/Map";

import "./Dashboard.css";
import Dashscreen from "./Dashscreen/Dashscreen";

// import SideMenu from "./SideMenu/SideMenu";
import { useDispatch } from "react-redux";
import { setLogin } from "../../Redux-toolkit/LoginSlice";

export default function Dashboard() {
	const dispatch = useDispatch();
	let { path, url } = useRouteMatch();
	const history = useHistory();
	const location = useLocation();
	console.log(location.state.admin);
	const logout = () => {
		dispatch(setLogin(false));
		history.push("/");
	};
	return (
		<div
			className='d-flex flex-column dashboard '
			style={{
				height: "100vh",
			}}>
			<div className='bg-dark p-3 text-end text-white'>
				<span>
					{location.state.admin === true ? "admin" : "normal user"}
				</span>
				<button onClick={logout} className='btn btn-danger ms-2'>
					LOGOUT
				</button>
			</div>
			<div className='flex-1 '>
				<Map />
			</div>
		</div>
	);
}
