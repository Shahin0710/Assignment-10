import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ComponentsLayout from './ComponentsLayout';

const Data = [
  {
    "name": "Maris Gros",
    "description": "Take a step forward with your right leg and bend your right knee as you do so, stopping when your thigh is parallel to the ground. Ensure that your right knee doesn’t extend past",
    "img": "https://cdn.pixabay.com/photo/2016/03/02/10/32/allrounder-1232059_960_720.jpg"
  },
  {
    "name": "Habib Ahmed",
    "description": "Take a step forward with your right leg and bend your right knee as you do so, stopping when your thigh is parallel to the ground. Ensure that your right knee doesn’t extend past",
    "img": "https://media.istockphoto.com/photos/arab-male-english-teacher-explaining-rules-near-blackboard-standing-picture-id1342027604?s=612x612"
  },
  {
    "name": "Rasel Domingo",
    "description": "Take a step forward with your right leg and bend your right knee as you do so, stopping when your thigh is parallel to the ground. Ensure that your right knee doesn’t extend past",
    "img": "https://cdn.pixabay.com/photo/2020/04/16/13/56/read-5050733__340.jpg"
  },
  {
    "name": "Firoz Khan",
    "description": "Take a step forward with your right leg and bend your right knee as you do so, stopping when your thigh is parallel to the ground. Ensure that your right knee doesn’t extend past",
    "img": "https://cdn.pixabay.com/photo/2018/04/24/23/51/man-3348467__340.png"
  },
  {
    "name": "Alisha Silava",
    "description": "Take a step forward with your right leg and bend your right knee as you do so, stopping when your thigh is parallel to the ground. Ensure that your right knee doesn’t extend past",
    "img": "https://cdn.pixabay.com/photo/2019/04/14/15/28/retro-4126999_960_720.jpg"
  },
  {
    "name": "Kathrina Kaif",
    "description": "Take a step forward with your right leg and bend your right knee as you do so, stopping when your thigh is parallel to the ground. Ensure that your right knee doesn’t extend past",
    "img": "https://cdn.pixabay.com/photo/2017/05/29/20/59/womens-2354905__340.jpg"
  },
  
]


const Team = () => {
  return (
    <ComponentsLayout>
      <Box>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ pt: { xs: 1, md: 0 }, mt: 5, fontWeight: '600' }}>
                Our Teacher And Management Team
            </Typography>
            <Typography variant="h5" sx={{ pt: { xs: 1, md: 0 }, my: 2, fontWeight: '200' }}>
                Based on build and profile, your feedback will be public 
                and visible to external users.
            </Typography>
          </Grid>
          <Grid container direction="row" spacing={4}>
          {Data?.map((item, index) => (
            <Grid item xs={12} md={3} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="580"
                    image={item?.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item?.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Contact</Button>
                  </CardActions>
                </Card>
            </Grid>
          ))}
          </Grid>
      </Box>
    </ComponentsLayout>
  )
}

export default Team;
