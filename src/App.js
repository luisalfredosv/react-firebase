import React from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

function App() {
	return (
		<>
			<Container>
				<TextField
					id='outlined-basic'
					label='Outlined'
					variant='outlined'
				/>
			</Container>
		</>
	);
}

export default App;
