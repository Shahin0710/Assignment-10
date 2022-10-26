import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import React, { useEffect, useState } from 'react';
import ComponentsLayout from './ComponentsLayout';

const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:8000/course-data')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

  return (
    <ComponentsLayout>
      <Container component="main" maxWidth="xs">
        <CardMedia
          component="img"
          sx={{ width: 'full' }}
          image='https://cdn.pixabay.com/photo/2016/08/05/09/26/hand-1571842_960_720.jpg'
          alt='Picture'
      />
        <h1>Home</h1>
        <h1>{categories?.length}</h1>
      </Container>
    </ComponentsLayout>
  )
}

export default Home;