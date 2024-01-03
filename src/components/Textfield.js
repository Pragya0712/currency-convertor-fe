import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import React from "react";

const Textfield = () => {
	return (
		<FormControl fullWidth variant='outlined'>
			<OutlinedInput
				id='outlined-adornment-weight'
				type='number'
				endAdornment={<InputAdornment position='end'>BTC</InputAdornment>}
				aria-describedby='outlined-weight-helper-text'
				inputProps={{
					"aria-label": "weight",
				}}
			/>
			{/* <FormHelperText id='outlined-weight-helper-text'>Weight</FormHelperText> */}
		</FormControl>
	);
};

export default Textfield;
