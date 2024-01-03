import { Box, Button, Container } from "@mui/material";
import Header from "./components/Header";
import AutocompleteSelect from "./components/AutocompleteSelect";
import Textfield from "./components/Textfield";
import DisplayBox from "./components/DisplayBox";

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
					<DisplayBox />
					<Button size='large' type='submit' fullWidth variant='contained'>
						Convert
					</Button>
				</Box>
			</Container>
		</div>
	);
}

export default App;
