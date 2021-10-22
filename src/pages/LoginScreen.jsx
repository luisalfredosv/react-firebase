import {
	Container,
	CssBaseline,
	Avatar,
	Typography,
	Box,
	TextField,
	FormControlLabel,
	Button,
	Checkbox,
	Grid,
	Link,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import GoogleButton from "react-google-button";

import { googleLogin, emailAndPasswordLogin } from "../actions/authActions";

const LoginScreen = () => {
	const dispatch = useDispatch();

	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = data;

	const handleChange = (e) => {
		const value = e.target.value;
		setData({
			...data,
			[e.target.name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (email.trim() === "" || !email.trim().includes("@")) {
			return;
		}
		if (password.trim().length < 6) {
			return;
		}

		dispatch(emailAndPasswordLogin(email, password));
	};

	const handleGoogleLogin = (e) => {
		e.preventDefault();
		dispatch(googleLogin());
	};

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
					<TextField
						onChange={handleChange}
						value={email}
						name='email'
						required
						fullWidth
						label='Email Address'
						autoComplete='email'
						variant='outlined'
						type='email'
					/>

					<TextField
						margin='normal'
						required
						fullWidth
						label='Password'
						autoComplete='current-password'
						variant='outlined'
						name='password'
						onChange={handleChange}
						value={password}
						type='password'
					/>
					<FormControlLabel
						control={<Checkbox value='remember' color='primary' />}
						label='Remember me'
					/>

					<Grid container spacing={3}>
						<Grid item xs={6}>
							{" "}
							<Button
								type='submit'
								size='large'
								fullWidth
								variant='contained'
								style={{
									height: 50,
								}}
							>
								Sign In
							</Button>
						</Grid>
						<Grid item xs={6}>
							<GoogleButton
								style={{
									display: "flex",
									width: 187,
									height: 50,
									borderRadius: 3,
								}}
								onClick={handleGoogleLogin}
							/>
						</Grid>
					</Grid>

					<Grid container>
						{/* <Grid item xs>
							<Link href='#' variant='body2'>
								Forgot password?
							</Link>
						</Grid> */}
						<Grid item xs>
							<Link href='/register' variant='button'>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};

export default LoginScreen;
