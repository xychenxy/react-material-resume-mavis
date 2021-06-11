import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import {
	List,
	ListItemIcon,
	ListItemText,
	AppBar,
	CssBaseline,
	Divider,
	Drawer,
	Hidden,
	IconButton,
	Toolbar,
	Typography,
	Slide,
	useScrollTrigger,
	Grid,
	Avatar,
} from "@material-ui/core";
import MuiListItem from "@material-ui/core/ListItem";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import BatteryCharging90Icon from "@material-ui/icons/BatteryCharging90";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Portfolio from "../pages/Portfolio";
import SkillSet from "../pages/Skillset";
import HireMe from "../pages/HireMe";
import Footer from "./Footer";
import sideBarAvatarBkg from "../assets/imgs/yu.jpeg";
import bubbleBackground from "../assets/imgs/bubbleBackground.jpeg";
import mainBackground from "../assets/imgs/mainBackground.jpeg";
import goToTop from "../assets/imgs/startup.png";
import ScrollToTop from "react-scroll-up";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		backgroundImage: `url(${mainBackground})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center center",
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
		backgroundColor: "#464646",
	},
	breadNavRoot: {
		display: "flex",
		alignItems: "center",
		verticalAlign: "middle",
	},
	grow: {
		flexGrow: 1,
	},

	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
		[theme.breakpoints.up("md")]: {
			boxShadow: "none",
			// backgroundColor: "transparent",
			backgroundColor: "rgba(255, 255, 255, 0.3)",
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	toolbar: theme.mixins.toolbar,
	accountIcons: {
		display: "flex",
		height: 64,
		marginLeft: theme.spacing(4),
		position: "relative",
	},
	marginRight: {
		marginRight: theme.spacing(2),
	},
	drawerPaper: {
		color: "white",
		width: drawerWidth,
		height: "100vh",
		backgroundImage: `url(${bubbleBackground})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center center",
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
		backgroundColor: "#464646",

		"&::before": {
			content: '""',
			position: "absolute",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			backgroundColor: "rgba(0, 0, 0, 0.5)",
		},
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(2),
		marginTop: theme.spacing(5),
	},
	icon: {
		color: "white",
	},
	desktopSocialIcons: {
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	goToTop: {
		width: "50px",
		height: "50px",
	},
}));

const ListItem = withStyles({
	root: {
		"&$selected": {
			backgroundColor: "#e15141",
			color: "white",
		},
		"&$selected:hover": {
			backgroundColor: "#e15141",
			color: "white",
		},
		// "&:hover": {
		// 	backgroundColor: "blue",
		// 	color: "white",
		// },
	},
	selected: {},
})(MuiListItem);

const itemsList = [
	{
		text: "Portfolio",
		icon: <AttachFileIcon />,
		goTo: "/",
		selectedId: 0,
	},
	{
		text: "Skillset",
		icon: <BatteryCharging90Icon />,
		goTo: "/skillset",
		selectedId: 1,
	},
	{
		text: "Hire Me",
		icon: <PersonAddIcon />,
		goTo: "/hireme",
		selectedId: 2,
	},
];

const SideBar = (props) => {
	const { history } = props;
	const classes = useStyles();
	const { container } = props;
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [currentPath, setCurrentPath] = useState("Portfolio");

	function handleDrawerToggle() {
		setMobileOpen(!mobileOpen);
	}

	const handleListItemClick = (e, index, goTo) => {
		switch (goTo) {
			case "/":
				setCurrentPath("Portfolio");
				break;
			case "/skillset":
				setCurrentPath("Skillset");
				break;
			case "/hireme":
				setCurrentPath("Hire Me");
				break;
			default:
				break;
		}

		setSelectedIndex(index);
		history.push(goTo);
	};

	const drawer = (
		<div>
			<div className={classes.toolbar}>
				<Grid alignItems="center" className={classes.accountIcons}>
					<Grid
						item
						alignItems="center"
						className={classes.marginRight}
					>
						<Avatar alt="Mavis Sharp" src={sideBarAvatarBkg} />
					</Grid>
					<Grid item alignItems="center">
						<Typography variant="h6">Mavis</Typography>
					</Grid>
				</Grid>
			</div>
			<Divider />
			<List>
				{itemsList.map((item, index) => {
					const { text, icon, goTo, selectedId } = item;
					return (
						<ListItem
							button
							key={text}
							onClick={(e) =>
								handleListItemClick(e, selectedId, goTo)
							}
							selected={selectedIndex === selectedId}
						>
							{icon && (
								<ListItemIcon className={classes.icon}>
									{icon}
								</ListItemIcon>
							)}
							<ListItemText primary={text} />
						</ListItem>
					);
				})}
			</List>
		</div>
	);

	function HideOnScroll(props) {
		const { children, window } = props;
		// Note that you normally won't need to set the window ref as useScrollTrigger
		// will default to window.
		// This is only being set here because the demo is in an iframe.
		const trigger = useScrollTrigger({
			target: window ? window() : undefined,
		});

		return (
			<Slide appear={false} direction="down" in={!trigger}>
				{children}
			</Slide>
		);
	}

	return (
		<div className={classes.root}>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<Grid container alignItems="center">
							<Grid
								item
								className={classes.breadNavRoot}
								// alignItems="center"
							>
								<IconButton
									color="inherit"
									aria-label="Open drawer"
									edge="start"
									onClick={handleDrawerToggle}
									className={classes.menuButton}
								>
									<MenuIcon />
								</IconButton>
								<Typography variant="h6">
									{currentPath}
								</Typography>
							</Grid>
							<Grid item sm></Grid>
							<Grid item className={classes.desktopSocialIcons}>
								<IconButton
									href="https://github.com/xychenxy"
									target="_blank"
								>
									<GitHubIcon
										className={classes.socialIcon}
									/>
								</IconButton>
								<IconButton
									href="https://www.linkedin.com/in/xiaoyu-chen-web-developer/"
									target="_blank"
								>
									<LinkedInIcon
										className={classes.socialIcon}
									/>
								</IconButton>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</HideOnScroll>

			{/* end of Header */}

			{/* SideBar Nav */}
			<nav className={classes.drawer} aria-label="Mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<div classes>
						<Drawer
							container={container}
							variant="temporary"
							anchor={
								theme.direction === "rtl" ? "right" : "left"
							}
							open={mobileOpen}
							onClose={handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper,
							}}
							ModalProps={{
								keepMounted: true, // Better open performance on mobile.
							}}
						>
							{drawer}
						</Drawer>
					</div>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			{/* end of SideBar Nav */}

			{/* Content */}
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Switch>
					<Route
						exact
						from="/"
						render={(props) => <Portfolio {...props} />}
					/>
					<Route
						exact
						path="/skillset"
						render={(props) => <SkillSet {...props} />}
					/>
					<Route
						exact
						path="/hireme"
						render={(props) => <HireMe {...props} />}
					/>
				</Switch>
				<ScrollToTop showUnder={160}>
					<img src={goToTop} alt="Up" className={classes.goToTop} />
				</ScrollToTop>
				{/* Footer */}
				<Footer />
				{/* end of Footer */}
			</main>
			{/* end of Content */}
		</div>
	);
};

export default withRouter(SideBar);
