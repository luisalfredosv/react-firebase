import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { login } from "../actions/authActions";

import LoginScreen from "../pages/LoginScreen";
import RegistrerScreen from "../pages/RegistrerScreen";

import AppRouter from "./AppRouter";

const AuthRouter = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, ({ uid, displayName }) => {
			dispatch(login(uid, displayName));
		});
	}, [dispatch]);

	return (
		<Router>
			<Switch>
				<Route exact path='/login' component={LoginScreen} />
				<Route exact path='/register' component={RegistrerScreen} />

				<AppRouter />
			</Switch>
		</Router>
	);
};

export default AuthRouter;
