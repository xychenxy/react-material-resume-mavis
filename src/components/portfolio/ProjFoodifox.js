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
		color: "whitesmoke",
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
		text: ["React", "Gatsby", "GraphQL", "HTML", "CSS", "JavaScript"],
		type: "red",
	},
	{
		text: ["Netlify"],
		type: "yellow",
	},
];
const ProjFoodifox = () => {
	const classes = useStyles();
	return (
		<div className={classes.projectContainer}>
			<div className={classes.projectTileWrap}>
				<div className={classes.projectTile}>
					<Typography variant="h5">Foodifox Website</Typography>
				</div>
			</div>
			<div className={classes.projectDescriptionWrap}>
				<div className={classes.projectDescription}>
					<Typography variant="body1" gutterBottom>
						I am the only one developer to develop and maintain the
						Foodifox Website.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Foodifox Website is a web app which is created by React,
						Gatsby and GraghQL. It is a pure HTML, CSS application
						without any UI framework.
					</Typography>

					<DescriptionDivider />
					<Typography variant="h5" gutterBottom>
						It serves as
					</Typography>
					<Typography variant="body1" gutterBottom>
						<ul>
							<li>Showing company's products and culture</li>
							<li>Customers can enquire via EmailJS</li>
							<li>Completing 8 pages</li>
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
					<ProjSnapshot projectName="foodifox" />
				</div>
				<div className={classes.projectTimelineWrap}>
					<ProjTimeline
						startTime="12/2020"
						endTime="Current"
						company="Foodifox"
						project="Foodifox Website"
						location="CBD, Melbourne, Australia"
					/>
				</div>
			</div>
		</div>
	);
};
export default ProjFoodifox;
