import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography variant="body1">Hey ~</Typography>
		</div>
	);
};

export default Footer;
