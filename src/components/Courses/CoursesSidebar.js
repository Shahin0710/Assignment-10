import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CoursesSidebar = ({Data}) => {
  const navigate = useNavigate();

  const handleDetailCourse = (id) => {
      navigate(`/courses/detail/${id}`);
  };

  return (
    <Box sx={{ height: '100%' }}>
        <Typography gutterBottom variant="h5" component="h2" sx={{ mb: 5 }}>Courses List</Typography>
        {Data.map((item) => (
          <Box key={item?.id} sx={{ mb: 2 }}>
            <Button onClick={() =>handleDetailCourse(item?.id)} size="small">{item?.name}</Button>
          </Box>
        ))}
    </Box>
  )
}

export default CoursesSidebar;
