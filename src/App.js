import { Box, Button, Container } from "@mui/material";
import Header from "./components/Header";
import AutocompleteSelect from "./components/AutocompleteSelect";
import Textfield from "./components/Textfield";

function App() {
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
					// onSubmit={handleSubmit}
					noValidate
					gap={2}>
					<AutocompleteSelect />
					<AutocompleteSelect />
					<Textfield />
					<Button
						size='large'
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 5 }}>
						Convert
					</Button>
				</Box>
			</Container>
		</div>
	);
}

export default App;
