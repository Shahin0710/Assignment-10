import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import ComponentsLayout from './ComponentsLayout';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Blog = () => {
  const [expandedOne, setExpandedOne] = React.useState(false);
  const [expandedTwo, setExpandedTwo] = React.useState(false);
  const [expandedThree, setExpandedThree] = React.useState(false);
  const [expandedFour, setExpandedFour] = React.useState(false);

  const handleExpandClickOne = () => {
    setExpandedOne(!expandedOne);
  };

  const handleExpandClickTwo = () => {
    setExpandedTwo(!expandedTwo);
  };

  const handleExpandClickThree = () => {
    setExpandedThree(!expandedThree);
  };

  const handleExpandClickFour = () => {
    setExpandedFour(!expandedFour);
  };

  return (
    <ComponentsLayout>
      <Box>
        <Grid container spacing={4}>
            {/* BLOG WHAT IS CORS */}
            <Grid item xs={12} md={6}>
              <Card sx={{ mb: 5 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      Q.
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="What is cors?"
                  subheader="September 14, 2022"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847__340.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Please share if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expandedOne}
                    onClick={handleExpandClickOne}
                    aria-expanded={expandedOne}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expandedOne} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography variant="h5">
                      What is cors?
                    </Typography>
                    <Typography paragraph>
                      Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism 
                      that allows a server to indicate any origins (domain, scheme, or port) other 
                      than its own from which a browser should permit loading resources. CORS also 
                      relies on a mechanism by which browsers make a "preflight" request to the server 
                      hosting the cross-origin resource, in order to check that the server will permit 
                      the actual request. In that preflight, the browser sends headers that indicate the 
                      HTTP method and headers that will be used in the actual request.
                    </Typography>
                    <Typography paragraph>
                      For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts.
                      For example, XMLHttpRequest and the Fetch API follow the same-origin policy. 
                      This means that a web application using those APIs can only request resources 
                      from the same origin the application was loaded from unless the response from 
                      other origins includes the right CORS headers.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            {/* Why are we using firebase */}
            <Grid item xs={12} md={6}>
              <Card sx={{ mb: 5 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      Q.
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Why are we using firebase?"
                  subheader="October 10, 2022"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="https://media.istockphoto.com/photos/human-resource-manager-checks-the-cv-online-to-choose-the-perfect-picture-id1352650187?b=1&k=20&m=1352650187&s=170667a&w=0&h=pxySPYen6VoEUYL2r8rLFEx6WEdM8X9LMkwihvyIV0Y="
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Please share if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expandedTwo}
                    onClick={handleExpandClickTwo}
                    aria-expanded={expandedTwo}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expandedTwo} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography variant="h5">
                      Why are we using firebase?
                    </Typography>
                    <Typography paragraph>
                      Firebase offers numerous easy-to-use SDKs, efficient back-end services, 
                      and user interface libraries for authenticating the users on the 
                      application. Typically, it takes months to establish a functional 
                      authentication process, but with Firebase, the whole system can be 
                      set up in minutes and less than 15 lines of code.
                    </Typography>
                    <Typography paragraph>
                        Another advantage of Firebase is its Cloud Firestore. This NoSQL 
                        database makes it easy for programmers to transfer and store data 
                        for front and backend development. This cloud database is also known 
                        for its Realtime updates, flexible data models, offline support, and 
                        quick data inquiries.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            {/* How the private router works */}
            <Grid item xs={12} md={6}>
              <Card sx={{ mb: 5 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      Q.
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="How the private router works?"
                  subheader="October 10, 2022"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="https://res.cloudinary.com/practicaldev/image/fetch/s---2eA0k-S--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zw6ade965aztnwz1kur3.png"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Please share if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expandedThree}
                    onClick={handleExpandClickThree}
                    aria-expanded={expandedThree}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expandedThree} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography variant="h5">
                      How the private router works?
                    </Typography>
                    <Typography paragraph>
                      The react private route component renders child components ( children ) 
                      if the user is logged in. If not logged in the user is redirected to the 
                      /login page with the return url passed in the location state property.
                    </Typography>
                    <Typography paragraph>
                      The current logged in user (authUser) is retrieved from Redux state with a 
                      call to the useSelector() hook. Redux is used in this example however it is 
                      not required to implement a Private Route component in React Router 6. You 
                      could use a different state management library or any approach you prefer to 
                      get the logged in status of the user. 
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
            
            {/* What is node and how it work? */}
            <Grid item xs={12} md={6}>
              <Card sx={{ mb: 5 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      Q.
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="What is node and how it work?"
                  subheader="December 05, 2021"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="https://res.cloudinary.com/practicaldev/image/fetch/s--e_rqeB7o--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/2400/1%2AFPtQLT2Zk-baHficCz_mXQ.png"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Please share if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expandedFour}
                    onClick={handleExpandClickFour}
                    aria-expanded={expandedFour}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expandedFour} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography variant="h5">
                      What is node and how it work?
                    </Typography>
                    <Typography paragraph>
                      Node.js is an open-source, cross-platform, back-end JavaScript runtime 
                      environment that runs on a JavaScript Engine and executes JavaScript 
                      code outside a web browser, which was designed to build scalable network 
                      applications. Wikipedia
                    </Typography>
                    <Typography paragraph>
                      It is a used as backend service where javascript works on the server-side 
                      of the application. This way javascript is used on both frontend and 
                      backend. Node. js runs on chrome v8 engine which converts javascript 
                      code into machine code, it is highly scalable, lightweight, fast, and 
                      data-intensive.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
        </Grid>
      </Box>
    </ComponentsLayout>
  )
}

export default Blog;
