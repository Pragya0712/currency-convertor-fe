import { Autocomplete, FormControl, TextField } from "@mui/material";
import dummyList from "./dummy-data.json";
import React from "react";

const AutocompleteSelect = () => {
	console.log(dummyList);
	return (
		<FormControl fullWidth>
			<Autocomplete
				disablePortal
				id='combo-box-demo'
				options={dummyList}
				renderInput={(params) => <TextField {...params} label='Currency' />}
			/>
		</FormControl>
	);
};

export default AutocompleteSelect;
