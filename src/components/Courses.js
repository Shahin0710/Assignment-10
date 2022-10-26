import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ComponentsLayout from './ComponentsLayout';


const Courses = () => {
    // const { post } = props;

    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:8000/course-data')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

    console.log(categories);

  return (
    <ComponentsLayout>
      <Container component="main" maxWidth="xs">
          <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
              <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h5">
                     Hello
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Hello Data
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                     description
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                  image='https://cdn.pixabay.com/photo/2016/08/05/09/26/hand-1571842_960_720.jpg'
                  alt='Picture'
                />
              </Card>
            </CardActionArea>
          </Grid>
      </Container>
    </ComponentsLayout>
  )
}

Courses.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Courses;
 
