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

const Data = [
    {
    "id": "1",
    "name": "Redux Course",
    "description": "Redux a step forward with your right leg and bend your right knee as you do so, stopping when your thigh is parallel to the ground. Ensure that your right knee doesn’t extend past",
    "price": "260",
    "img": "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__340.jpg"
  },
  {
    "id": "2",
    "name": "HTML Course",
    "description": "HTML a step forward with your right leg and bend your right knee as you do so, stopping when your thigh is parallel to the ground. Ensure that your right knee doesn’t extend past",
    "price": "196",
    "img": "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406__340.jpg"
  },
  {
    "id": "3",
    "name": "C++ Course",
    "description": "C++ Course a step forward with your right leg and bend your right knee as you do so, stopping when your thigh is parallel to the ground. Ensure that your right knee doesn’t extend past",
    "price": "245",
    "img": "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507__340.jpg"
  },
  {
    "id": "4",
    "name": "Python Course",
    "description": "Python a step forward with your right leg and bend your right knee as you do so, stopping when your thigh is parallel to the ground. Ensure that your right knee doesn’t extend past",
    "price": "229",
    "img": "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118__340.jpg"
  },
  {
    "id": "5",
    "name": "React Course",
    "description": "React a step forward with your right leg and bend your right knee as you do so, stopping when your thigh is parallel to the ground. Ensure that your right knee doesn’t extend past",
    "price": "287",
    "img": "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275__340.jpg"
  },
  {
    "id": "6",
    "name": "Django Course",
    "description": "Django a step forward with your right leg and bend your right knee as you do so, stopping when your thigh is parallel to the ground. Ensure that your right knee doesn’t extend past",
    "price": "138",
    "img": "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920__340.jpg"
  },
  {
    "id": "7",
    "name": "Graphic Design",
    "description": "Take a Graphic Design forward with your right leg and bend your right knee as you do so, stopping when your thigh is parallel to the ground. Ensure that your right knee doesn’t extend past",
    "price": "226",
    "img": "https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550__340.jpg"
  },
  {
    "id": "8",
    "name": "Data structure",
    "description": "Take a Data structure forward with your right leg and bend your right knee as you do so, stopping when your thigh is parallel to the ground. Ensure that your right knee doesn’t extend past",
    "price": "319",
    "img": "https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351__340.png"
  },
];

const theme = createTheme();

const Courses = () => {
  const navigate = useNavigate();

  const handleDetailCourse = (id) => {
      navigate('/courses/detail');
      console.log('id', id);
  };
    // const [categories, setCategories] = React.useState([]);

    // React.useEffect( () =>{
    //     fetch('http://localhost:8000/course-data')
    //     .then( res => res.json())
    //     .then(data => setCategories(data));
    // }, [])

    // console.log(categories);

  return (
  <ComponentsLayout>
      <Box>
          <ThemeProvider theme={theme}>
            <main>
              <Grid container spacing={4}>
                <Grid item xs={12} md={10}>
                  <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                      {Data.map((item) => (
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
                  <CoursesSidebar Data={Data} />
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