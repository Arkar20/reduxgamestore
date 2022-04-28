import {
	Collapse,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import Loading from "./ui/Loading";
import axios from "axios";
import style from "../style/style";
import { useParams } from "react-router-dom";

const DetailPage = ({ history }) => {
	const { slug: id } = useParams();

	const classes = style();
	const [detaildata, setDetaildata] = useState({});
	const [openlink, setOpenlink] = React.useState(false);

	useEffect(() => {
		function findDetialGame() {
			axios
				.get("http://localhost:3001/games/" + id)
				.then(res => setDetaildata(res.data));
		}
		findDetialGame();

		return setDetaildata({});
	}, []);
	const handleClick = () => {
		setOpenlink(!openlink);
	};
	const detailpage = (
		<div style={{ marginTop: 80 }}>
			<Grid container direction='column'>
				<Grid item container direction='column'>
					<Grid item container direction='row'>
						<Grid item>
							<IconButton component={Link} to='/games'>
								<ArrowBackIosIcon color='secondary' />
							</IconButton>
						</Grid>
						<Grid item>
							<Typography
								variant='h1'
								style={{ marginTop: 5 }}
								className={classes.h1text}>
								{detaildata.title}
							</Typography>
						</Grid>
					</Grid>
					<Grid
						item
						container
						className={classes.detailimgcontainer}
						justify='center'>
						{/* <Grid item className={classes.detailimg}> */}
						{detaildata && (
							<img
								src={detaildata.image}
								alt={detaildata?.title}
								height='500'
							/>
							// <img src={detaildata && process.env.REACT_APP_BASEURL + `${detaildata.img1}`} alt={detaildata && detaildata.title} width="100%" height="100%" />
						)}
						{/* </Grid> */}
					</Grid>
				</Grid>
				<Grid
					item
					container
					className={classes.detailimgcontainer}
					direction='column'>
					<Grid item className={classes.detailtextcontainer}>
						<Typography variant='h2' paragraph className={classes.h2text}>
							Description
						</Typography>
						<Typography variant='body1' className={classes.body1text} paragraph>
							{detaildata.desc}
						</Typography>
					</Grid>
					<Grid item className={classes.detailtextcontainer}>
						<Typography variant='h2' className={classes.h2text} paragraph>
							Requirements
						</Typography>
						<Typography variant='body1' className={classes.body1text} paragraph>
							{detaildata.desc}
						</Typography>
					</Grid>
					<Grid item style={{ marginLeft: 22 }}>
						{/* <Typography variant="h2"  className={classes.h2text} paragraph>Download</Typography> */}
						<List component='div' disablePadding>
							<ListItem button onClick={handleClick}>
								<ListItemText disableTypography className={classes.h2text}>
									Download
								</ListItemText>
								{openlink ? <ExpandLess /> : <ExpandMore />}
							</ListItem>
							<Collapse in={openlink} timeout='auto' unmountOnExit>
								<ListItem button className={classes.nested}>
									<ListItemText disableTypography className={classes.body1text}>
										Some Download Link
									</ListItemText>
								</ListItem>
							</Collapse>
						</List>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);

	return (
		<>
			{detaildata ? (
				detailpage
			) : (
				<Grid
					container
					direction='column'
					justify='center'
					className={classes.homecontainer}
					style={{ width: "100%", height: "100vh" }}>
					<Loading />
				</Grid>
			)}
		</>
	);
};
export default DetailPage;
