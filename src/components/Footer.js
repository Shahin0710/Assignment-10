import CreateIcon from '@mui/icons-material/Create';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import * as React from 'react';

const Footer = function () {
    return (
        <footer>
            <Paper variant="outlined" square sx={{ p: 5, mt: 5, backgroundColor: '#282c34', color: 'white'}}>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
                    <Grid item xs={6} md={3}>
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <FacebookIcon sx={{ color: 'white' }} />
                              </ListItemIcon>
                              <ListItemText primary="Our FaceBook" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <TwitterIcon sx={{ color: 'white' }} />
                              </ListItemIcon>
                              <ListItemText primary="Our Twitter" />
                            </ListItemButton>
                          </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <InstagramIcon sx={{ color: 'white' }} />
                              </ListItemIcon>
                              <ListItemText primary="Our Instagram" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <LinkedInIcon sx={{ color: 'white' }} />
                              </ListItemIcon>
                              <ListItemText primary="Our LinkedIn" />
                            </ListItemButton>
                          </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <MenuBookIcon sx={{ color: 'white' }} />
                              </ListItemIcon>
                              <ListItemText primary="Read Our Blog" />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <CreateIcon sx={{ color: 'white' }} />
                              </ListItemIcon>
                              <ListItemText primary="Please FeedBack" />
                            </ListItemButton>
                          </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <List>
                          <ListItem disablePadding>
                              <ListItemText primary="Contact:" />
                          </ListItem>
                          <ListItem disablePadding>
                              <ListItemText primary="# 146 West Jurain," />
                          </ListItem>
                          <ListItem disablePadding>
                              <ListItemText primary="Shampur, Foridabad" />
                          </ListItem>
                          <ListItem disablePadding>
                              <ListItemText primary="Dhaka-1204" />
                          </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Paper>
            {/* COPYRIGHT PART */}
            <Paper variant="outlined" square sx={{ p: 2.5 }}>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="body2" align="center">
                            {'Copyright © '} 2022 e Learning School Pvt Ltd. All rights reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </footer>
    );
};
export default Footer;
