import React from 'react';
import './card-style.css'
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@mui/material/CardMedia';


const Cards = ({rocket}) => {

    // const classes = useStyles();
    return (
     
        <div className='card-container'>
        <Card sx={{ maxWidth: 200 }}>
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
          <div>{rocket.launch_date_unix}</div>
          <div>Launch Status:{rocket.launch_success?'Success':'Fail'}</div>
          <div>Is it upcoming:{rocket.upcoming?'Yes':'No'}</div>

          
             {/* <p>{props.rocket.email}</p> */}
          {/* </Typography> */}
        </CardContent>
       
      </Card>
</div>
        
    );
};

export default Cards;