import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import React from "react";

const Textfield = ({ name, symbol, form, setForm }) => {
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	return (
		<FormControl fullWidth variant='outlined'>
			<OutlinedInput
				id='outlined-adornment-weight'
				name={name}
				type='number'
				endAdornment={<InputAdornment position='end'>{symbol}</InputAdornment>}
				aria-describedby='outlined-weight-helper-text'
				inputProps={{
					"aria-label": "weight",
				}}
				value={form?.amount}
				onChange={(e) => handleChange(e)}
			/>
			{/* <FormHelperText id='outlined-weight-helper-text'>Weight</FormHelperText> */}
		</FormControl>
	);
};

export default Textfield;
