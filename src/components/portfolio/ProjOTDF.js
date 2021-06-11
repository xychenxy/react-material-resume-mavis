import React from "react";
import { Typography } from "@material-ui/core";
import Controls from "../controls/Controls";
import DescriptionDivider from "../DescriptionDivider";
import ProjTimeline from "./ProjTimeline";
import ProjSnapshot from "./ProjSnapshot";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	projectContainer: {
		width: "100%",
		backgroundColor: "transparent",
		paddingTop: "100px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		flexWrap: "wrap",
		position: "relative",
		marginBottom: "100px",
	},
	projectTileWrap: {
		position: "absolute",
		top: "-20px",
		width: "95%",
		margin: "0 auto",
		height: "70px",
		backgroundColor: "rgba(80, 160, 85, 0.8)",

		borderRadius: "10px",
		boxShadow: "5px 5px 15px 5px rgba(80, 160, 85, 0.3)",
		color: "white",
	},
	projectTile: {
		height: "80px",
		display: "flex",
		justifyContent: "left",
		alignItems: "center",
		paddingLeft: "25px",
	},
	projectDescriptionWrap: {
		[theme.breakpoints.down("md")]: {
			width: "85%",
		},
		[theme.breakpoints.down("sm")]: {
			width: "90%",
		},
		width: "750px",
	},
	projectImages: {
		[theme.breakpoints.down("md")]: {
			marginTop: theme.spacing(5),
		},
		width: "300px",
	},
	projectScreenshotsWrap: {
		marginBottom: "30px",
		width: "100%",
		height: "auto",
		boxShadow: "5px 5px 15px 5px #cccccc",
	},
	projectTimelineWrap: {
		paddingTop: "20px",
		width: "100%",
		height: "auto",
		backgroundColor: "white",
		boxShadow: "5px 5px 15px 5px #cccccc",
	},
}));

const techStack = [
	{
		text: [
			"Symfony",
			"PHP",
			"Bootstrap 4",
			"HTML",
			"CSS",
			"jQuery",
			"Axios",
		],
		type: "red",
	},
	{
		text: ["Agile", "Scrum"],
		type: "yellow",
	},
	{
		text: ["AWS", "MySQL"],
		type: "green",
	},
];
const ProjOTDF = () => {
	const classes = useStyles();
	return (
		<div className={classes.projectContainer}>
			<div className={classes.projectTileWrap}>
				<div className={classes.projectTile}>
					<Typography variant="h5">
						Opening the Door Foundation
					</Typography>
				</div>
			</div>
			<div className={classes.projectDescriptionWrap}>
				<div className={classes.projectDescription}>
					<Typography variant="body1" gutterBottom>
						I am the web developer to create front end pages and
						maintain the whole project.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Opening the Door Foundation is a web app which is
						created by Symfony. It is aiming to support the extra
						costs associated with schooling for Aboriginal students
						around Victoria.
					</Typography>

					<DescriptionDivider />
					<Typography variant="h5" gutterBottom>
						It serves as
					</Typography>
					<Typography variant="body1" gutterBottom>
						<ul>
							<li>Showing application form</li>
							<li>Tracking all the applications</li>
							<li>Approval rules</li>
						</ul>
					</Typography>

					<DescriptionDivider />
					<Typography variant="h5" gutterBottom>
						Tech Stack
					</Typography>
					<Typography variant="body1" gutterBottom>
						{techStack.map((item, key) => {
							return (
								<div className="projectBtnInline">
									{item.text.map((text, index) => {
										return (
											<Controls.Tag
												text={text}
												variant="outlined"
												type={item.type}
												key={index}
											/>
										);
									})}
								</div>
							);
						})}
					</Typography>
				</div>
			</div>
			<div className={classes.projectImages}>
				<div className={classes.projectScreenshotsWrap}>
					<ProjSnapshot projectName="OTDF" />
				</div>
				<div className={classes.projectTimelineWrap}>
					<ProjTimeline
						startTime="10/2019"
						endTime="12/2019"
						company="RMIT University"
						project="Opening the Door Foundation"
						location="CBD, Melbourne, Australia"
					/>
				</div>
			</div>
		</div>
	);
};
export default ProjOTDF;
