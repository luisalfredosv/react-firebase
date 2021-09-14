import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginScreen from "../pages/LoginScreen";
import RegistrerScreen from "../pages/RegistrerScreen";

const AuthRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/login' component={LoginScreen} />
				<Route exact path='/register' component={RegistrerScreen} />
			</Switch>
		</Router>
	);
};

export default AuthRouter;
