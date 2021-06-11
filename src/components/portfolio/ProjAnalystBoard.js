import React from "react";
import { Typography } from "@material-ui/core";
import Controls from "../controls/Controls";
import DescriptionDivider from "../DescriptionDivider";
import ProjTimeline from "./ProjTimeline";
import ProjSnapshot from "./ProjSnapshot";
import { makeStyles } from "@material-ui/core/styles";

// import "../pages/Styles/Portfolio.css";

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
			"React",
			"Redux",
			"Ant Design",
			"HTML",
			"CSS",
			"Less",
			"JavaScript",
			"Axios",
			"Webpack",
			"Npm",
		],
		type: "red",
	},
	{
		text: ["Node", "MongoDB"],
		type: "yellow",
	},
	{
		text: ["AWS", "PM2", "Nginx"],
		type: "green",
	},
];
const ProjAnalystBoard = () => {
	const classes = useStyles();
	return (
		<div className={classes.projectContainer}>
			<div className={classes.projectTileWrap}>
				<div className={classes.projectTile}>
					<Typography variant="h5">Analyst Board</Typography>
				</div>
			</div>
			<div className={classes.projectDescriptionWrap}>
				<div className={classes.projectDescription}>
					<Typography variant="body1" gutterBottom>
						I am the only one developer to develop and maintain the
						Analyst Board.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Analyst Board is a web app which is created by React. It
						is aiming to provide decision makers with analytics
						data.
					</Typography>

					<DescriptionDivider />
					<Typography variant="h5" gutterBottom>
						It serves as
					</Typography>
					<Typography variant="body1" gutterBottom>
						<ul>
							<li>
								Showing analytics data for decision maker via
								running algorithms
							</li>
							<li>
								Providing search, date range, sort, add comment
								functions in dashboard
							</li>
							<li>Tracking orders' delivery status via API</li>
							<li>
								Generating sales reports and auto sending
								everyday via AWS endpoints
							</li>
							<li>User management, such as add, delete.</li>
						</ul>
					</Typography>

					<DescriptionDivider />
					<Typography variant="h5" gutterBottom>
						Tech Breakdown
					</Typography>
					<Typography variant="body1" gutterBottom>
						<ul>
							<li>
								Caching database queries
								<ul>
									<li>
										Problems: How to improve performance of
										querying analytics data
									</li>
									<li>
										Solved:
										<ul>
											<li>
												Using cache-memory in backend
											</li>
											<li>Setting timeout value</li>
											<li>Refactor algorithms</li>
										</ul>
									</li>
									<li>
										Result:
										<ul>
											<li>Successful</li>
											<li>Reduced request number</li>
											<li>
												Saved up to 2 minutes in new
												requests
											</li>
										</ul>
									</li>
								</ul>
							</li>
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
					<ProjSnapshot projectName="dashboard" />
				</div>
				<div className={classes.projectTimelineWrap}>
					<ProjTimeline
						startTime="08/2020"
						endTime="05/2021"
						company="Palette"
						project="Analyst Board"
						location="Fitzroy, Melbourne, Australia"
					/>
				</div>
			</div>
		</div>
	);
};
export default ProjAnalystBoard;
