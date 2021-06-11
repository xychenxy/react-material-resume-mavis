import React, { useState } from "react";
import {
	makeStyles,
	useTheme,
	createMuiTheme,
	ThemeProvider,
} from "@material-ui/core/styles";
import SideBar from "../components/SideBar";

const theme = createMuiTheme({
	palette: {
		primary: { main: "#fff", light: "#3c44b126" },
		secondary: {
			main: "rgba(80, 160, 85, 0.7)",
			light: "#f8324526",
		},
		background: {
			default: "#eeeeee",
		},
	},
	overrides: {
		MuiListItem: {
			root: {
				width: "80%",
				margin: "0 auto",
				marginTop: "12px",
				marginBottom: "12px",
				paddingTop: "12px",
				paddingBottom: "12px",
				borderRadius: "5px",
			},
		},
	},
	props: {
		MuiIconButton: {
			disableRipple: true,
		},
	},
	typography: {
		fontFamily: ["Chilanka", "cursive"].join(","),
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<SideBar />
		</ThemeProvider>
	);
};
export default App;
