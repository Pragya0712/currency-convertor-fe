import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AutocompleteSelect from "./AutocompleteSelect";
import Textfield from "./Textfield";
import DisplayBox from "./DisplayBox";
import ConvertorContext from "../context/Convertor";
import { convert } from "../api/apicalls";

const Form = () => {
	const { currencies, cryptoCurrencies, showAlert } =
		useContext(ConvertorContext);
	const [form, setForm] = useState({});
	const [displayAmt, setDisplayAmt] = useState();
	const [disableBtn, setDisableBtn] = useState(true);

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const currency_id = form?.currency?.id;
			const amount = form?.amount;
			const crypto_symbol = form?.crypto?.symbol;
			const response = await convert(currency_id, amount, crypto_symbol);
			setDisplayAmt(response?.data?.amount);
		} catch (error) {
			showAlert();
		}
	};

	useEffect(() => {
		if (form?.currency && form?.crypto && form?.amount) {
			setDisableBtn(false);
		} else {
			setDisableBtn(true);
		}
	}, [form?.currency, form?.crypto, form?.amount]);

	return (
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
			<Button
				size='large'
				type='submit'
				fullWidth
				variant='contained'
				disabled={disableBtn}>
				Convert
			</Button>
		</Box>
	);
};

export default Form;
