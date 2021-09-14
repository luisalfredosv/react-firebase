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

import { useDispatch } from "react-redux";
import GoogleButton from "react-google-button";

import { googleLogin } from "../actions/authActions";

const LoginScreen = () => {
	const dispatch = useDispatch();

	const handleSubmit = () => {};

	const handleGoogleLogin = () => {
		dispatch(googleLogin("12345", "Luis"));
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
				<Box
					component='form'
					onSubmit={handleSubmit}
					noValidate
					sx={{ mt: 1 }}
				>
					<TextField
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						autoFocus
						variant='outlined'
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						variant='outlined'
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
