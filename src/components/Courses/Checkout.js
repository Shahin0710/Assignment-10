import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import ComponentsLayout from '.././ComponentsLayout';

const theme = createTheme();

const Checkout = () => {
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
                    Congratulations !!
                  </Typography>
                  <Typography variant="h5" align="center" color="text.secondary" paragraph>
                     You are successfully Done.
                  </Typography>
                  <Typography variant="h5" align="center" color="text.secondary" paragraph>
                     Name: {user?.displayName}
                  </Typography>
                  <Typography variant="h5" align="center" color="text.secondary" paragraph>
                     Photo URL: {user?.photoURL}
                  </Typography>
                  <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                  >
                    <Button onClick={() => navigate('/')} variant="contained">Go Home</Button>
                  </Stack>
                </Container>
              </Box>
            </main>
          </ThemeProvider>
      </Box>
    </ComponentsLayout>
  )
}

export default Checkout;
