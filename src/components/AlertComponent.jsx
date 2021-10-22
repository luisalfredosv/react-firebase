import React from "react";
import PropTypes from "prop-types";
import { Alert } from "@material-ui/core";

const AlertComponent = ({ type, message }) => {
	return (
		<>
			<Alert severity={type}>{message}</Alert>
		</>
	);
};

AlertComponent.propTypes = {
	type: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
};

export default AlertComponent;
