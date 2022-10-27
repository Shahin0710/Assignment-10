import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ComponentsLayout from '../ComponentsLayout';
import CoursesSidebar from './CoursesSidebar';

const theme = createTheme();

const Courses = () => {
  const navigate = useNavigate();

  const handleDetailCourse = (id) => {
      navigate(`/courses/detail/${id}`);
  };
    const [categories, setCategories] = React.useState([]);

    React.useEffect( () =>{
        fetch('https://e-learning-server-zeta.vercel.app/course-data')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

  return (
  <ComponentsLayout>
      <Box>
          <ThemeProvider theme={theme}>
            <main>
              <Grid container spacing={4}>
                <Grid item xs={12} md={10}>
                  <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                      {categories.map((item) => (
                        <Grid item key={item?.id} xs={12} sm={6} md={6}>
                          <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                          >
                            <CardMedia
                              component="img"
                              image={item?.img}
                              alt={item?.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                              <Typography gutterBottom variant="h5" component="h2">
                                {item?.name}
                              </Typography>
                              <Typography>
                                {item?.description}
                              </Typography>
                              <Typography>
                                $ {item?.price}
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button onClick={() =>handleDetailCourse(item?.id)} size="small">Details</Button>
                            </CardActions>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Container>
                </Grid>
                <Grid item xs={12} md={2}>
                  <CoursesSidebar Data={categories} />
                </Grid>
              </Grid>
            </main>
          </ThemeProvider>
      </Box>
    </ComponentsLayout>
  )
}

export default Courses;

<Grid container spacing={4}>
  <Grid item xs={12} md={8}>

  </Grid>
</Grid>