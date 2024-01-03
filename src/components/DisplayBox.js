import { Box, Typography } from "@mui/material";
import React from "react";

const DisplayBox = () => {
	return (
		<Box
			component='span'
			sx={{
				whiteSpace: "normal",
				textOverflow: "ellipsis",
				mb: 3,
				mt: 3,
			}}>
			<Typography
				variant='h5'
				color='inherit'
				component='span'
				sx={{ fontWeight: "bold", fontFamily: "Monospace" }}>
				85876.41796080966
			</Typography>
			<Typography
				variant='subtitle2'
				color='inherit'
				component='span'
				sx={{ fontFamily: "Monospace" }}>
				{" "}
				USD
			</Typography>
		</Box>
	);
};

export default DisplayBox;
