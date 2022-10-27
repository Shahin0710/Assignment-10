import { Box, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ComponentsLayout from '../ComponentsLayout';

const theme = createTheme();

const CourseDetails = () => {
    const singleId = useParams();
    const navigate = useNavigate();
    const [categories, setCategories] = React.useState({});

    React.useEffect( () =>{
        fetch(`http://localhost:8001/course-data/${singleId?.id}`)
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

  return (
    <ComponentsLayout>
      <Box>
        <ThemeProvider theme={theme}>
          <main>
            <Container sx={{ py: 8 }} maxWidth="xs">
              <Grid container spacing={4}>
                <Box>
                  <Box sx={{my: 5}}>
                    <Button onClick={() => navigate('/react_to_pdf')} size="small">Download</Button>
                  </Box>
                  <Card sx={{ maxWidth: 450 }}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image={categories?.img}
                      alt={categories?.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {categories?.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        $ {categories?.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {categories?.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {categories?.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => navigate('/checkout')} size="small">Get Premium Access</Button>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            </Container>
          </main>
        </ThemeProvider>
      </Box>
    </ComponentsLayout>
  )
}

export default CourseDetails;

