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
import { useNavigate } from 'react-router-dom';
import ComponentsLayout from '../ComponentsLayout';

const theme = createTheme();

const CourseDetails = () => {
    const navigate = useNavigate();

  return (
    <ComponentsLayout>
      <Box>
        <ThemeProvider theme={theme}>
          <main>
            <Container sx={{ py: 8 }} maxWidth="xs">
              <Grid container spacing={4}>
                <Box>
                  <Box sx={{my: 5}}>
                    <Button onClick={() => navigate('/react_to_pdf')} size="small">Pdf Download</Button>
                  </Box>
                  <Card sx={{ maxWidth: 450 }}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__340.jpg"
                      alt="image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
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

