import Container from '@mui/material/Container';
import React from 'react';
import ComponentsLayout from './ComponentsLayout';

const Home = () => {
  return (
    <ComponentsLayout>
      <Container component="main" maxWidth="xs">
        <h1>Home</h1>
      </Container>
    </ComponentsLayout>
  )
}

export default Home;