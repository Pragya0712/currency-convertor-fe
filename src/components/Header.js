import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const Header = () => {
	return (
		<AppBar position='static'>
			<Toolbar variant='dense'>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='menu'
					sx={{ mr: 1 }}>
					<CurrencyExchangeIcon />
				</IconButton>
				<Typography variant='h5' color='inherit' component='div'>
					Currency Convertor
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
