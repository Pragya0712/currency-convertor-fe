import Header from "./components/Header";
import { useEffect, useState } from "react";
import { listCryptoCurrencies, listCurrencies } from "./api/apicalls";
import Form from "./components/Form";
import ConvertorContext from "./context/Convertor";
import { Box, CircularProgress, Container } from "@mui/material";
import Alert from "./components/Alert";

function App() {
	const [loading, setLoading] = useState(true);
	const [currencies, setCurrencies] = useState([]);
	const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
	const [alert, setAlert] = useState(false);

	const showAlert = () => {
		setAlert(true);
		setTimeout(() => {
			setAlert(false);
		}, 3000);
	};

	const fetchCurrencyList = async () => {
		try {
			const response = await listCurrencies();
			const currencyList = response.data || [];
			setCurrencies(currencyList);
		} catch (error) {
			showAlert();
		}
	};

	const fetchCryptoCurrencyList = async () => {
		try {
			const response = await listCryptoCurrencies();
			const currencyList = response.data || [];
			setCryptoCurrencies(currencyList);
		} catch (error) {
			showAlert();
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

	return (
		<ConvertorContext.Provider
			value={{ currencies, cryptoCurrencies, showAlert }}>
			<Header />
			{alert && (
				<Alert
					type={`warning`}
					label={`Unable to process request — Please try again later!`}
				/>
			)}
			<Container component='main' maxWidth='xs'>
				{!loading ? (
					<Form />
				) : (
					<Box
						sx={{
							marginTop: "50%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<CircularProgress />
					</Box>
				)}
			</Container>
		</ConvertorContext.Provider>
	);
}

export default App;
