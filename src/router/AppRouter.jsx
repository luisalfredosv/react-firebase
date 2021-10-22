import React from "react";
import { Switch, Route } from "react-router-dom";

import AppScreen from "../pages/AppScreen";

const AppRouter = () => {
	return (
		<Switch>
			<Route exact path='/app' component={AppScreen} />
		</Switch>
	);
};

export default AppRouter;
