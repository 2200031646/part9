import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Mobilecards({mobile}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={mobile.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {mobile.brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Model : {mobile.model}
            price : {mobile.price}
            Available : {mobile.available?"Yes":"No"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}