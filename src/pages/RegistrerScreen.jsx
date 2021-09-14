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

const RegistrerScreen = () => {
	const handleSubmit = () => {};

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
				<Box
					component='form'
					noValidate
					onSubmit={handleSubmit}
					sx={{ mt: 3 }}
				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete='fname'
								name='firstName'
								required
								fullWidth
								id='firstName'
								label='First Name'
								variant='outlined'
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id='lastName'
								label='Last Name'
								name='lastName'
								autoComplete='lname'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
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
