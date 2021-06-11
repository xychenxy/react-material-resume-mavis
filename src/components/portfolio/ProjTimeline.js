import React from "react";
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
} from "@material-ui/lab";
import { Grid, Typography, IconButton } from "@material-ui/core";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import RoomIcon from "@material-ui/icons/Room";

import { makeStyles } from "@material-ui/core/styles";

// import "../pages/Styles/Portfolio.css";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "90%",
		margin: "0 auto",
		paddingBottom: 30,
	},
	location: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));

const ProjTimeline = (props) => {
	const { startTime, endTime, company, project, location } = props;
	const classes = useStyles();

	return (
		<>
			<Timeline align="alternate">
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot variant="outlined">
							<DirectionsWalkIcon />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>{startTime}</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot variant="outlined" color="primary" />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>{company}</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot variant="outlined" color="secondary">
							<DesktopMacIcon />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>{project}</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot variant="outlined">
							<DirectionsWalkIcon />
						</TimelineDot>
					</TimelineSeparator>
					<TimelineContent>{endTime}</TimelineContent>
				</TimelineItem>
			</Timeline>
			<div className={classes.root}>
				<Grid alignItems="center" className={classes.location}>
					<Grid item>
						<IconButton
							href="https://goo.gl/maps/AMBnBDREVpT22BKa9"
							target="_blank"
						>
							{<RoomIcon />}
						</IconButton>
					</Grid>
					<Grid item>
						<Typography variant="subtitle1">{location}</Typography>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default ProjTimeline;
