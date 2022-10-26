import { Box, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React from 'react';
import ComponentsLayout from './ComponentsLayout';

const Report = () => {
  return (
    <ComponentsLayout>
      <Box>
          <Box sx={{ paddingBottom: { xs: 1, sm: 1 } }}>
              <Typography variant="h3" sx={{ pt: { xs: 1, md: 0 }, mx: 2, mt: 5, fontWeight: '600' }}>
                  Report a Problem
              </Typography>
              <Typography variant="h5" sx={{ pt: { xs: 1, md: 0 }, mx: 2, my: 2, fontWeight: '200' }}>
                  Based on build and profile, your feedback will be public 
                  and visible to external users.
              </Typography>
          </Box>
          <Grid container spacing={3}>
              <Grid item xs={12}>
                  <TextField
                      label="Title"
                      name="title"
                      fullWidth
                      required
                  />
              </Grid>
              <Grid item xs={12}>
                  <TextField
                      label="Description"
                      name="description"
                      multiline
                      minRows={6}
                      fullWidth
                      required
                  />
              </Grid>
              <Grid item xs={12}>
                  <Button variant="contained" sx={{ mt: 2}}>Sent</Button>
              </Grid>
          </Grid>
      </Box>
    </ComponentsLayout>
  )
}

export default Report;
