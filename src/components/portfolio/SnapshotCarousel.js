import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../pages/Styles/Portfolio.css";
import foodifox1 from "../../assets/imgs/foodifox1.png";
import foodifox2 from "../../assets/imgs/foodifox2.png";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
const useStyles = makeStyles((theme) => ({
	root: {
		width: "90%",
		margin: "0 auto",
		paddingBottom: 30,
	},
	imgContainer: {
		width: "100%",
		marginBottom: theme.spacing(2),
	},
	header: {
		textAlign: "center",
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
}));

const SnapshotCarousel = (props) => {
	const classes = useStyles();
	const { projectName } = props;

	const items = [
		{
			name: "foodifox #1",
			description: "Great lunch boxes in Melbourne",
			image: foodifox1,
		},
		{
			name: "foodifox #2",
			description: "Great lunch boxes in Melbourne",
			image: foodifox2,
		},
	];

	return (
		<Carousel
			IndicatorIcon={<FiberManualRecordIcon />}
			indicatorIconButtonProps={{
				style: {
					padding: "10px", // 1
				},
			}}
			autoPlay={false}
		>
			{projectName === "warehouse" ||
			projectName === "dashboard" ||
			projectName === "OTDF" ? (
				<Paper>
					<div className={classes.header}>
						<Typography variant="h5" gutterBottom>
							{projectName}
						</Typography>
						<Typography variant="h5" gutterBottom>
							Sorry, I can't show on snapshot of this project as
							confidentiality agreement.
						</Typography>
					</div>
				</Paper>
			) : (
				items.map((item, i) => (
					<Paper key={i}>
						<div className={classes.header}>
							<Typography variant="h5" gutterBottom>
								{projectName}
							</Typography>
							<Typography variant="h5" gutterBottom>
								{item.description}
							</Typography>
						</div>

						<img
							src={item.image}
							alt={item.name}
							className={classes.imgContainer}
						/>
					</Paper>
				))
			)}
		</Carousel>
	);
};

export default SnapshotCarousel;
