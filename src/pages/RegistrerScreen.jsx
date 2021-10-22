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
import { registrer } from "../actions/authActions";

const RegistrerScreen = () => {
	const dispatch = useDispatch();

	const [data, setData] = useState({
		fullName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { fullName, email, password, confirmPassword } = data;

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

		if (fullName.trim().length < 3) {
			return;
		}

		if (password.trim().length < 6) {
			return;
		} else {
			if (password.trim() !== confirmPassword.trim()) {
				return;
			}
		}

		dispatch(registrer(email, password, fullName));
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
					Sign up
				</Typography>
				<Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								onChange={handleChange}
								value={fullName}
								name='fullName'
								required
								fullWidth
								label='Full Name'
								autoComplete='fullname'
								variant='outlined'
								type='text'
							/>
						</Grid>
						<Grid item xs={12}>
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
						</Grid>
						<Grid item xs={12}>
							<TextField
								onChange={handleChange}
								value={password}
								name='password'
								required
								fullWidth
								label='Password'
								type='password'
								variant='outlined'
								autoComplete='new-password'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								onChange={handleChange}
								value={confirmPassword}
								name='confirmPassword'
								required
								fullWidth
								label='Confirm Password'
								type='password'
								variant='outlined'
								autoComplete='new-password'
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Checkbox
										value='allowExtraEmails'
										color='primary'
									/>
								}
								label='I want to receive inspiration, marketing promotions and updates via email.'
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
						style={{
							height: 50,
						}}
					>
						Sign Up
					</Button>
					<Grid container justifyContent='flex-end'>
						<Grid item>
							<Link href='/login' variant='button'>
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
};

export default RegistrerScreen;
