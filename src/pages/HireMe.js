import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import HireMeTimeLine from "../components/hireMe/HireMeTimeLine";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import myCV from "../assets/imgs/yu.jpeg";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "rgba(255, 255, 255, 0.7)",
	},
	container: {
		paddingTop: theme.spacing(4),
		display: "flex",
		justifyContent: "space-around",
		flexWrap: "wrap",
	},
	boardRoot: {
		boxShadow: "5px 5px 15px 5px #cccccc",
		marginBottom: theme.spacing(7),
		backgroundColor: "rgba(255, 255, 255, 0.3)",
	},
	download: {
		marginBottom: theme.spacing(3),
		paddingTop: theme.spacing(5),
		paddingBottom: theme.spacing(5),
	},
	downloadButton: {
		background: "rgba(228,57,54,0.8)",
		borderRadius: 3,
		border: 0,
		color: "white",
		padding: "10px 45px",
		boxShadow: "0 3px 5px 2px rgba(228,57,54, .3)",
		textTransform: "capitalize",
		fontSize: "1.1rem",
		transition: "all 1s ease",
		"&:hover": {
			background: "rgba(228,57,54,0.9)",
			transform: "scale(1.1)",
		},
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
}));

const HireMe = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.header}>
				<div className={classes.title}>
					<Typography variant="h5">Hire Me</Typography>
				</div>
			</div>
			<div className={classes.container}>
				<div className={classes.download}>
					<Button
						variant="contained"
						color="default"
						className={classes.downloadButton}
						startIcon={<CloudDownloadIcon />}
						href={myCV}
						download
					>
						Download CV
					</Button>
				</div>
				<div className={classes.boardRoot}>
					<Timeline align="alternative">
						<HireMeTimeLine />
					</Timeline>
				</div>
			</div>
		</div>
	);
};

export default HireMe;
