import { Autocomplete, FormControl, TextField } from "@mui/material";
import React from "react";

const AutocompleteSelect = ({ name, label, optionList, form, setForm }) => {
	const handleChange = (value) => {
		setForm({ ...form, [name]: value });
	};
	return (
		<FormControl fullWidth>
			<Autocomplete
				name={name}
				disablePortal
				id={name}
				options={optionList}
				getOptionLabel={(option) => `${option.name} (${option.symbol})`}
				// defaultValue={optionList.find((option) => option.symbol ===)}
				renderInput={(params) => <TextField {...params} label={label} />}
				onChange={(e, value) => handleChange(value)}
			/>
		</FormControl>
	);
};

export default AutocompleteSelect;
