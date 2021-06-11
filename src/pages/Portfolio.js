import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import ProjWarehouse from "../components/portfolio/ProjWarehouse";
import ProjAnalystBoard from "../components/portfolio/ProjAnalystBoard";
import ProjFoodifox from "../components/portfolio/ProjFoodifox";
import ProjOTDF from "../components/portfolio/ProjOTDF";

const useStyles = makeStyles((theme) => ({
	root: {},
	projectRoot: {
		width: "100%",
		backgroundColor: "rgba(255, 255, 255, 0.7)",
	},
}));

const Portfolio = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper
				elevation={0}
				variant="outlined"
				square
				className={classes.projectRoot}
			>
				<ProjWarehouse />
				<ProjAnalystBoard />
				<ProjFoodifox />
				<ProjOTDF />
			</Paper>
		</div>
	);
};

export default Portfolio;
