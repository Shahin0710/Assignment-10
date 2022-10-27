import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ComponentsLayout from './ComponentsLayout';

const Team = () => {
    const [categories, setCategories] = React.useState([]);

    React.useEffect( () =>{
        fetch('https://e-learning-server-zeta.vercel.app/course-data')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

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
          {categories?.map((item, index) => (
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
