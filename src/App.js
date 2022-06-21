// import React from "react";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Admin/Admin";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import NormalUser from "./Components/NormalUser/NormalUser";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/dashboard'>
					<Dashboard />
				</Route>
				{/* <Route exact path='/normal'>
					<NormalUser />
				</Route> */}
			</Switch>
		</Router>
	);
}

export default App;
