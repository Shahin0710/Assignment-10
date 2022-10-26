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

const Data = [
  {
    "name": "Kids Love",
    "img": "https://media.istockphoto.com/photos/your-painting-is-beautiful-well-done-picture-id1369912893?s=612x612"
  },
  {
    "name": "Teaching Happy",
    "img": "https://media.istockphoto.com/photos/arab-male-english-teacher-explaining-rules-near-blackboard-standing-picture-id1342027604?s=612x612"
  },
  {
    "name": "Teacher In Class",
    "img": "https://media.istockphoto.com/photos/portrait-of-happy-high-school-teacher-in-the-classroom-looking-at-picture-id1354640844"
  },
  {
    "name": "Kids Love",
    "img": "https://media.istockphoto.com/photos/shot-of-a-woman-hugging-her-learners-picture-id1395831599?s=612x612"
  },
  {
    "name": "Our Sincere",
    "img": "https://media.istockphoto.com/photos/hispanic-mom-helping-her-little-daughter-do-her-homework-mom-teaching-picture-id1372354626?b=1&k=20&m=1372354626&s=170667a&w=0&h=wf2qoR1545PrVreMgbFhEsoDseA_1a0vZwyOTb1IKm4="
  },
  {
    "name": "Being Professional",
    "img": "https://media.istockphoto.com/photos/smiling-computer-science-teacher-using-laptop-during-a-class-and-at-picture-id1366724990?b=1&k=20&m=1366724990&s=170667a&w=0&h=1a5RHWypGIc0o-D9pt8gNgDNB2D0MmxHg-WFlHjJaHU="
  },
  
]

const theme = createTheme();

const Home = () => {
  const {user} = React.useContext(AuthContext);
  const navigate = useNavigate();

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
                  {Data.map((items, index) => (
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
