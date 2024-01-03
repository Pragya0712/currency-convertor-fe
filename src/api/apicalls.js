import { apicall } from "../utils/apiInstance";

export const listCurrencies = async () => {
	let response = await apicall(`/currencies`, "get");
	return response.data;
};

export const listCryptoCurrencies = async () => {
	let response = await apicall(`/currencies/crypto`, "get");
	return response.data;
};

export const convert = async (currency_id, amount, crypto_symbol) => {
	let response = await apicall(
		`/currencies/crypto?currency_id=${currency_id}&amount=${amount}&crypto_symbol=${crypto_symbol}`,
		"post"
	);
	return response.data;
};
