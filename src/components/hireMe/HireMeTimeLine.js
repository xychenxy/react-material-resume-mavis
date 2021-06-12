import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Divider, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
	paper: {
		paddingBottom: "16px",
		marginBottom: theme.spacing(5),
	},
	header: {
		width: "100%",
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		backgroundColor: "rgba(80, 160, 85, 0.7)",
		marginBottom: "16px",
		display: "flex",
		alignItems: "center",
		paddingLeft: "10px",
		color: "whitesmoke",
		display: "flex",
		justifyContent: "space-between",
	},
	body: {
		paddingLeft: "10px",
		paddingRight: "10px",
		paddingTop: "10px",
		paddingBottom: "10px",
		display: "flex",
		justifyContent: "space-around",
	},
	more: { paddingRight: "10px" },
}));

const HireMeTimeLine = () => {
	const classes = useStyles();
	const items = [
		{
			name: "Palette",
			position: "JavaScript developer",
			link: "https://tintpaint.com.au/",
			location: "Melbourne",
			type: "Fulltime",
			time: "08/2020 - 05/2021",
		},
		{
			name: "Foodifox",
			position: "Web developer",
			link: "https://foodifox.com/",
			location: "Melbourne",
			type: "Contract",
			time: "12/2020 - Current",
		},
		{
			name: "RMIT University",
			position: "Web developer",
			link: "https://app.openingthedoors.org.au/",
			location: "Melbourne",
			type: "Contract",
			time: "10/2019 - 12/2019",
		},
		{
			name: "AIU Group",
			position: "Web developer",
			link: "https://www.aiugroup.com.au/",
			location: "Melbourne",
			type: "Contract",
			time: "01/2019 – 04/2019",
		},
		{
			name: "RMIT",
			position: "Student",
			link: "https://www.rmit.edu.au/",
			location: "Melbourne",
			type: "Fulltime",
			time: "02/2018 – 12/2019",
		},
	];
	return (
		<>
			{items.map((item) => {
				return (
					<TimelineItem>
						<TimelineOppositeContent style={{ flex: 0.1 }}>
							<Typography>{item.time}</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="primary">
								<LaptopMacIcon />
							</TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<Paper elevation={3} className={classes.paper}>
								<div className={classes.header}>
									<Typography variant="h6">
										{item.name}
									</Typography>
									<Button
										className={classes.more}
										color="primary"
										href={item.link}
									>
										More
									</Button>
								</div>
								<div className={classes.body}>
									<Typography variant="body1" gutterBottom>
										{item.position}
									</Typography>
									<Typography variant="body1" gutterBottom>
										{item.type}
									</Typography>
									<Divider />
								</div>
							</Paper>
						</TimelineContent>
					</TimelineItem>
				);
			})}
		</>
	);
};

export default HireMeTimeLine;
