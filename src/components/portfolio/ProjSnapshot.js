import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Backdrop,
	ButtonBase,
	Fade,
	Typography,
	Modal,
	Button,
} from "@material-ui/core";
import SnapshotCarousel from "./SnapshotCarousel";
import warehouseSystemSnapshot from "../../assets/imgs/mainBackground.jpeg";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "95%",
		margin: "0 auto",
	},
	snapshotContainer: {
		width: "100%",
		height: "100px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	snapshotRoot: {
		display: "flex",
		flexWrap: "wrap",
		minWidth: 280,
		width: "100%",
	},
	image: {
		position: "relative",
		height: 100,
		[theme.breakpoints.down("xs")]: {
			width: "100% !important", // Overrides inline-style
			height: 100,
		},
		"&:hover, &$focusVisible": {
			zIndex: 1,
			"& $imageBackdrop": {
				opacity: 0.15,
			},
			"& $imageMarked": {
				opacity: 0,
			},
			"& $imageTitle": {
				border: "4px solid currentColor",
			},
		},
	},
	focusVisible: {},
	imageButton: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: theme.palette.common.white,
	},
	imageSrc: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundImage: `url(${warehouseSystemSnapshot})`,
		backgroundSize: "cover",
		backgroundPosition: "center 40%",
	},
	imageBackdrop: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.4,
		transition: theme.transitions.create("opacity"),
	},
	imageTitle: {
		position: "relative",
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
			theme.spacing(1) + 6
		}px`,
	},
	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: "absolute",
		bottom: -2,
		left: "calc(50% - 9px)",
		transition: theme.transitions.create("opacity"),
	},

	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		width: "50%",
		height: "auto",
		[theme.breakpoints.down("md")]: {
			width: "75%",
		},
		[theme.breakpoints.down("sm")]: {
			width: "90%",
		},
	},
	footer: {
		textAlign: "right",
	},
}));

const ProjSnapshot = (props) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const { projectName } = props;

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<div className={classes.snapshotContainer}>
				<div className={classes.snapshotRoot}>
					<ButtonBase
						focusRipple
						className={classes.image}
						focusVisibleClassName={classes.focusVisible}
						style={{
							width: "100%",
						}}
						onClick={handleOpen}
					>
						<span className={classes.imageSrc} />
						<span className={classes.imageBackdrop} />
						<span className={classes.imageButton}>
							<Typography
								component="span"
								variant="subtitle1"
								color="inherit"
								className={classes.imageTitle}
							>
								Snapshots
								<span className={classes.imageMarked} />
							</Typography>
						</span>
					</ButtonBase>
				</div>
			</div>
			<Modal
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<SnapshotCarousel projectName={projectName} />
						<div className={classes.footer}>
							<Button onClick={handleClose}>Cancel</Button>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default ProjSnapshot;
