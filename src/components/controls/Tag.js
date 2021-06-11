import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const RedBtn = withStyles(() => ({
	root: {
		background: "rgba(228,57,54,0.8)",
		borderRadius: 3,
		border: 0,
		color: "white",
		height: 33,
		padding: "0 15px",
		boxShadow: "0 3px 5px 2px rgba(228,57,54,0.3)",
		textTransform: "capitalize",
		fontSize: "1rem",
	},
}))(Button);

const YellowBtn = withStyles(() => ({
	root: {
		background: "rgba(231,146,30,0.8)",
		borderRadius: 3,
		border: 0,
		color: "white",
		height: 33,
		padding: "0 15px",
		boxShadow: "0 3px 5px 2px rgba(231,146,30, .3)",
		textTransform: "capitalize",
		fontSize: "1rem",
	},
}))(Button);

const PinkBtn = withStyles(() => ({
	root: {
		background: "rgba(221, 94, 128,0.8)",
		borderRadius: 3,
		border: 0,
		color: "white",
		height: 33,
		padding: "0 15px",
		boxShadow: "0 3px 5px 2px rgba(221, 94, 128, .3)",
		textTransform: "capitalize",
		fontSize: "1rem",
	},
}))(Button);

const LightPinkBtn = withStyles(() => ({
	root: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		borderRadius: 3,
		border: 0,
		color: "white",
		height: 33,
		padding: "0 15px",
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		textTransform: "capitalize",
		fontSize: "1rem",
	},
}))(Button);

const BlueBtn = withStyles(() => ({
	root: {
		background: "rgba(15,174,197,0.8)",
		borderRadius: 3,
		border: 0,
		color: "white",
		height: 33,
		padding: "0 15px",
		boxShadow: "0 3px 5px 2px rgba(15,174,197, .3)",
		textTransform: "capitalize",
		fontSize: "1rem",
	},
}))(Button);

const GreenBtn = withStyles(() => ({
	root: {
		background: "rgba(78,167,80,0.8)",
		borderRadius: 3,
		border: 0,
		color: "white",
		height: 33,
		padding: "0 15px",
		boxShadow: "0 3px 5px 2px rgba(78,167,80, .3)",
		textTransform: "capitalize",
		fontSize: "1rem",
	},
}))(Button);

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
}));

export default function Tag(props) {
	const classes = useStyles();
	const { type, text } = props;

	return (
		<div>
			{type === "green" ? (
				<GreenBtn
					variant="contained"
					color="primary"
					className={classes.margin}
				>
					{text}
				</GreenBtn>
			) : null}
			{type === "blue" ? (
				<BlueBtn
					variant="contained"
					color="primary"
					className={classes.margin}
				>
					{text}
				</BlueBtn>
			) : null}
			{type === "red" ? (
				<RedBtn
					variant="contained"
					color="primary"
					className={classes.margin}
				>
					{text}
				</RedBtn>
			) : null}
			{type === "yellow" ? (
				<YellowBtn
					variant="contained"
					color="primary"
					className={classes.margin}
				>
					{text}
				</YellowBtn>
			) : null}
			{type === "pink" ? (
				<PinkBtn
					variant="contained"
					color="primary"
					className={classes.margin}
				>
					{text}
				</PinkBtn>
			) : null}
			{type === "lightPink" ? (
				<LightPinkBtn
					variant="contained"
					color="primary"
					className={classes.margin}
				>
					{text}
				</LightPinkBtn>
			) : null}
		</div>
	);
}
