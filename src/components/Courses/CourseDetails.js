import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ComponentsLayout from '../ComponentsLayout';

const CourseDetails = () => {
    const navigate = useNavigate();
  return (
    <ComponentsLayout>
      <Box>
          <Button size="small">Download</Button>
          <h2>CourseDetails</h2>
          <Button onClick={() => navigate('/checkout')} size="small">Get Premium Access</Button>
      </Box>
    </ComponentsLayout>
  )
}

export default CourseDetails;
