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
        <h1>Home</h1>
        <h1>{categories?.length}</h1>
      </Container>
    </ComponentsLayout>
  )
}

export default Home;