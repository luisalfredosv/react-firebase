import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Box,
	Button,
} from "@material-ui/core";
const AppScreen = () => {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static' color='transparent'>
					<Toolbar>
						<IconButton
							size='large'
							edge='start'
							color='primary'
							aria-label='menu'
							sx={{ mr: 2 }}
						>
							{/* <MenuIcon /> */}
						</IconButton>
						<Typography
							variant='h6'
							component='div'
							sx={{ flexGrow: 1 }}
						>
							App
						</Typography>
						<Button color='inherit'>Logout</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default AppScreen;
