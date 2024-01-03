import { Box, Button, Container, Typography } from "@mui/material";
import Header from "./components/Header";
import AutocompleteSelect from "./components/AutocompleteSelect";
import Textfield from "./components/Textfield";
import DisplayBox from "./components/DisplayBox";
import { useEffect, useState } from "react";
import { convert, listCryptoCurrencies, listCurrencies } from "./api/apicalls";

function App() {
	const [loading, setLoading] = useState(true);
	const [currencies, setCurrencies] = useState([]);
	const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
	const [form, setForm] = useState({
		currency: "",
		crypto: "",
		amount: "",
	});
	const [displayAmt, setDisplayAmt] = useState();

	const fetchCurrencyList = async () => {
		try {
			const response = await listCurrencies();
			const currencyList = response.data || [];
			setCurrencies(currencyList);
		} catch (error) {
			console.log(error);
		}
	};

	const fetchCryptoCurrencyList = async () => {
		try {
			const response = await listCryptoCurrencies();
			const currencyList = response.data || [];
			setCryptoCurrencies(currencyList);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchCurrencyList();
		fetchCryptoCurrencyList();
	}, []);

	useEffect(() => {
		if (currencies.length !== 0 && cryptoCurrencies.length !== 0) {
			setLoading(false);
		}
	}, [currencies, cryptoCurrencies]);

	// console.log(loading, cryptoCurrencies, currencies);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const currency_id = form?.currency?.id;
		const amount = form?.amount;
		const crypto_symbol = form?.crypto?.symbol;
		const response = await convert(currency_id, amount, crypto_symbol);
		setDisplayAmt(response?.data?.amount);
		console.log(response);
	};

	return (
		<div>
			<Header />
			<Container component='main' maxWidth='xs'>
				<Box
					sx={{
						marginTop: 15,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
					component='form'
					onSubmit={handleSubmit}
					noValidate
					gap={2}>
					<Typography
						variant='caption'
						color='inherit'
						component='span'
						sx={{ fontFamily: "Monospace" }}>
						Used for converting the crypto currency (Bitcoin, Ethereum, etc) to
						selected currency (EUR, USD, etc)
					</Typography>
					<AutocompleteSelect
						name={`crypto`}
						label={`Cryptocurrency`}
						optionList={cryptoCurrencies}
						form={form}
						setForm={setForm}
					/>
					<AutocompleteSelect
						name={`currency`}
						label={`Currency`}
						optionList={currencies}
						form={form}
						setForm={setForm}
					/>
					<Textfield
						name={`amount`}
						label={`Amount`}
						symbol={form?.crypto?.symbol}
						form={form}
						setForm={setForm}
					/>
					{displayAmt && (
						<DisplayBox amount={displayAmt} symbol={form?.currency?.symbol} />
					)}
					<Button size='large' type='submit' fullWidth variant='contained'>
						Convert
					</Button>
				</Box>
			</Container>
		</div>
	);
}

export default App;
