import React from "react";
import "./card-style.css";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@mui/material/CardMedia";

const Cards = ({ rocket }) => {
  // const classes = useStyles();

  const formatDate = (unix) => {
    var date = new Date(unix);
    return `Date: ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;
  };

  return (
    // <div className="card-container">
    <div className="column">
      <Card mx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          alt="rocket data"
          height="140"
          image={rocket.links.mission_patch_small}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h2>{rocket.mission_name}</h2>
          </Typography>
          {/* <Typography variant="body2" color="text.secondary"> */}
          <div>{rocket.rocket.rocket_name}</div>
          <div>{formatDate(rocket.launch_date_unix)}</div>
          <div>Launch Status:{rocket.launch_success ? "Success" : "Fail"}</div>
          <div>Is it upcoming:{rocket.upcoming ? "Yes" : "No"}</div>
        </CardContent>
      </Card>
    </div>
    // </div>
  );
};

export default Cards;
