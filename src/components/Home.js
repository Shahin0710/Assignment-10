import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import ComponentsLayout from './ComponentsLayout';

const theme = createTheme();

const Home = () => {
  const {user} = React.useContext(AuthContext);
  const navigate = useNavigate();

    const [categories, setCategories] = React.useState([]);

    React.useEffect( () =>{
        fetch('http://localhost:8001/home-data')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

  return (
    <ComponentsLayout>
      <Box>
          <ThemeProvider theme={theme}>
            <main>
              {/* Hero unit */}
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  pt: 8,
                  pb: 6,
                }}
              >
                <Container maxWidth="sm">
                  <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                  >
                    Welcome to eLS
                  </Typography>
                  <Typography variant="h5" align="center" color="text.secondary" paragraph>
                     A learning system based on formalised teaching but with the 
                     help of electronic resources is known as e learning school. While teaching 
                     can be based in or out of the classrooms, the use of computers and 
                     the Internet forms the major component of e learning school.
                  </Typography>
                  <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                  >
                  {user?.email ? 
                    <Button onClick={() => navigate('/courses')} variant="contained">Please Click Courses</Button>
                      :
                    <>
                      <Button onClick={() => navigate('/signup')} variant="contained">Sign Up Now</Button>
                      <Button onClick={() => navigate('/login')} variant="outlined">Login Please</Button>
                    </>
                  }
                  </Stack>
                </Container>
              </Box>
              <Container sx={{ py: 8 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                  {categories.map((items, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                      <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                      >
                        <CardMedia
                          component="img"
                          image={items?.img}
                          alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {items?.name}
                          </Typography>
                          <Typography>
                            eLS photo gallery 
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </main>
          </ThemeProvider>
      </Box>
    </ComponentsLayout>
  )
}

export default Home;
