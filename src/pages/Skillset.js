import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import SkillBoard from "../components/skillset/SkillBoard";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "rgba(255, 255, 255, 0.7)",
	},
	title: {
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		position: "relative",
		top: "-25px",
		width: "80%",
		height: "120px",
		margin: "0 auto",
		height: "70px",
		backgroundColor: "rgba(80, 160, 85, 0.7)",
		color: "white",
		borderRadius: "10px",
	},
	current: {
		height: "120px",
		width: "80%",
		margin: "0 auto",

		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
	},
}));
const SkillSet = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.header}>
				<div className={classes.title}>
					<Typography variant="h5">Skillset</Typography>
				</div>
			</div>
			<div className={classes.current}>
				<Typography variant="h5">
					Hey, I'm preparing 'AWS Certificated Developer Associate'
					recently.
				</Typography>
			</div>

			<SkillBoard />
		</div>
	);
};

export default SkillSet;
