import React from "react";
import { Typography } from "@material-ui/core";
import Controls from "../controls/Controls";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "90%",
		margin: "0 auto",
		paddingBottom: 60,
		paddingTop: 30,

		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		flexWrap: "wrap",
	},
	board: {
		width: "300px",
		backgroundColor: "rgba(255, 255, 255, 0.3)",
		boxShadow: "5px 5px 15px 5px #cccccc",
		marginBottom: theme.spacing(4),
		[theme.breakpoints.down("sm")]: {
			width: "90%",
		},
	},
	header: {
		height: "70px",
		backgroundColor: "rgba(80, 160, 85, 0.7)",
		color: "white",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	body: {
		padding: theme.spacing(2),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexWrap: "wrap",
	},
	footer: {
		height: "40px",
	},
}));

const items = [
	{
		key: 0,
		class: "Front end",
		framework: ["React", "Redux", "Electron", "WordPress", "Gatsby"],
		ui: ["Material-UI", "Ant Design", "Bootstrap"],
		tool: ["Webpack"],
		tech: ["JavaScript", "HTML", "CSS", "Less"],
		color: "red",
	},
	{
		key: 1,
		class: "Back end",
		tech: ["Node.js", "Python", "Java"],
		framework: ["Node", "Express", "MongoDB", "MySQL"],
		tool: ["Jest", "Mocha", "NPM", "YARN"],
		color: "yellow",
	},
	{
		key: 2,
		class: "Cloud",
		tech: ["Nginx", "PM2", "EC2", "Route53", "CloudFront", "CI/CD"],
		framework: ["AWS"],
		color: "pink",
	},
	{
		key: 3,
		class: "API Integration",
		framework: [
			"Uber",
			"Australia Post",
			"Shopify StoreFront",
			"Couriers Please",
			"Google",
		],
		tech: ["Postman"],
		color: "blue",
	},
	{
		key: 4,
		class: "Tools",
		framework: ["Git", "GitHub", "BitBucket"],
		tech: ["Agile", "Scrum"],
		tool: ["VS Code", "WebStorm"],
		ui: ["Figma", "Adobe XD", "X Mind"],
		color: "green",
	},
];

const SkillBoard = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{items.map((item) => (
				<div className={classes.board} key={item.key}>
					<div className={classes.header}>
						<Typography variant="h5">{item.class}</Typography>
					</div>
					<div className={classes.body}>
						{item.framework.map((tech) => (
							<Controls.Tag
								text={tech}
								variant="outlined"
								type={item.color}
							/>
						))}
					</div>
					{item.ui ? (
						<div className={classes.body}>
							{item.ui.map((tech) => (
								<Controls.Tag
									text={tech}
									variant="outlined"
									type={item.color}
								/>
							))}
						</div>
					) : null}
					{item.tool ? (
						<div className={classes.body}>
							{item.tool.map((tech) => (
								<Controls.Tag
									text={tech}
									variant="outlined"
									type={item.color}
								/>
							))}
						</div>
					) : null}
					<div className={classes.body}>
						{item.tech.map((tech) => (
							<Controls.Tag
								text={tech}
								variant="outlined"
								type={item.color}
							/>
						))}
					</div>

					<div className={classes.footer}></div>
				</div>
			))}
		</div>
	);
};

export default SkillBoard;
