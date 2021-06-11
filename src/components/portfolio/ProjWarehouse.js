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
		text: [
			"Electron",
			"React",
			"Redux",
			"Ant Design",
			"TypeScript",
			"HTML",
			"CSS",
			"Less",
			"JavaScript(ES6)",
			"Axios",
			"Webpack",
			"Yarn",
		],
		type: "red",
	},
	{
		text: ["Node", "Python", "MongoDB"],
		type: "yellow",
	},
	{
		text: ["AWS", "PM2", "Nginx"],
		type: "green",
	},
	{
		text: ["Bitbucket", "Slack", "Asana"],
		type: "blue",
	},
	{
		text: [
			"Restful API",
			"Integration",
			"Uber",
			"Australia Post",
			"Dear Inventory System",
			"Shopify",
			"Couriers Please",
		],
		type: "pink",
	},
];

const ProjWarehouse = () => {
	const classes = useStyles();
	return (
		<div className={classes.projectContainer}>
			<div className={classes.projectTileWrap}>
				<div className={classes.projectTile}>
					<Typography variant="h5">Warehouse System</Typography>
				</div>
			</div>
			<div className={classes.projectDescriptionWrap}>
				<div className={classes.projectDescription}>
					<Typography variant="body1" gutterBottom>
						I am the only one developer to develop and maintain the
						Warehouse System.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Warehouse System is a desktop app which is created by
						Electron. It is processing eCommerce orders, tinting
						paint, tracking stock levels, integrating with dispatch
						partners.
					</Typography>

					<DescriptionDivider />
					<Typography variant="h5" gutterBottom>
						It serves as
					</Typography>
					<Typography variant="body1" gutterBottom>
						<ul>
							<li>
								Processing eCommerce orders via Shopify
								StoreFront API
							</li>
							<li>Printing selected packing lists</li>
							<li>
								Tracking stock levels via Dear Inventory System
								API
							</li>
							<li>
								Tinting paints which customers have already
								customize color by PICO
							</li>
							<li>
								Showing all delivery fees, expected delivery
								days and delivery methods via Uber, Australia
								Post, Couriers Please API
							</li>
							<li>
								Printing shipping labels automatically after
								booking delivery
							</li>
						</ul>
					</Typography>

					<DescriptionDivider />
					<Typography variant="h5" gutterBottom>
						Tech Breakdown
					</Typography>
					<Typography variant="body1" gutterBottom>
						<ul>
							<li>
								Printing shipping labels automatically
								<ul>
									<li>
										Problems: How to merge quoting price,
										booking, printing shipping labels
										automatically in one button?
									</li>
									<li>
										Issues: Electron do not support silent
										printing PDF files.
									</li>
									<li>
										Solved:
										<ul>
											<li>
												Saved shipping labels (PDF) into
												local
											</li>
											<li>
												Writing a python script to call
												printer to print PDF file
											</li>
											<li>
												Installing
												python-third-party-module in
												Electron to execute python
												script
											</li>
										</ul>
									</li>
									<li>
										Result:
										<ul>
											<li>Successful</li>
											<li>
												Saved up to 30 seconds for each
												order
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
					<ProjSnapshot projectName="warehouse" />
				</div>
				<div className={classes.projectTimelineWrap}>
					<ProjTimeline
						startTime="08/2020"
						endTime="05/2021"
						company="Palette"
						project="Warehouse System"
						location="Fitzroy, Melbourne, Australia"
					/>
				</div>
			</div>
		</div>
	);
};
export default ProjWarehouse;
