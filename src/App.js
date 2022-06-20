import React from "react";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact to='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
