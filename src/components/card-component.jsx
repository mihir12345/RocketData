import React from 'react';
import './card-style.css'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@mui/material/CardMedia';


const Cards = (props) => {

    // const classes = useStyles();
    return (
        // <div className='card-container'>
        //     <img alt='' src={`https://robohash.org/${props.rocket.id}?size=200x200`}/>
        //     <h2>{props.rocket.name}</h2>
        //     <p>{props.rocket.email}</p>
        // </div>
        <div className='card-container'>
        <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={props.rocket.links.mission_patch_small}
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <h2>{props.rocket.mission_name}</h2>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>{props.rocket.rocket.rocket_name}</p>
          <p>{props.rocket.launch_date_unix}</p>
          <p>Launch Status:{props.rocket.launch_success?'Success':'Fail'}</p>
          <p>Is it upcoming:{props.rocket.upcoming?'Yes':'No'}</p>

          
             {/* <p>{props.rocket.email}</p> */}
          </Typography>
        </CardContent>
       
      </Card>
</div>
        
    );
};

export default Cards;