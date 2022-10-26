import ComputerIcon from '@mui/icons-material/Computer';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import { AuthContext } from '../contexts/UserContext';
import Color from './Color';

const pages = [
    {name: 'Courses', path: '/courses',},
    {name: 'FAQ', path: '/faq',},
    {name: 'Blog', path: '/blog',},
];

const pagesForMobile = [
    {name: 'Home', path: '/',},
    {name: 'Report', path: '/report',},
    {name: 'Product', path: '/product',},
    {name: 'Team', path: '/team',},
    {name: 'Support', path: '/support',},
    {name: 'Courses', path: '/courses',},
    {name: 'FAQ', path: '/faq',},
    {name: 'Blog', path: '/blog',},
];

// A STYLE SHEET
const useStyles = makeStyles()((theme) => {
   return {
     navLink: {
        textDecoration: 'none',
        color: 'inherit',
     },
     navLinkActive: {
        textDecoration: 'none',
        color: 'inherit',
     },
   };
 });

function Header() {
  const {user, logOut} = React.useContext(AuthContext);

  const { classes } = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.error(error));
          navigate('/login');
  }

  console.log(user);

  return (
    <>
    <AppBar position="fixed" color='secondary' sx={{ zIndex: (theme) => theme.zIndex.drawer + 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ComputerIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            eLS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pagesForMobile.map((page) => (
                <NavLink  to={page?.path} key={page?.name} onClick={handleCloseNavMenu}
                  className={
                      location.pathname === '/'
                          ? classes.navLinkActive
                          : classes.navLink
                  }
                >
                    <ListItem component="div" disablePadding sx={{ mt: 2, mx: 5 }}>
                        <ListItemButton>
                            <ListItemText primary={page?.name} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <ComputerIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            eLS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page?.name}
                onClick={handleCloseNavMenu}
                href={page?.path}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page?.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Color />
            <Tooltip title={user?.displayName}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="e" src={user?.photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography onClick={() => navigate('/signup')} textAlign="center">Sign up</Typography>
                </MenuItem>
                {user?.email ? 
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography onClick={handleSignOut} textAlign="center">Sign out</Typography>
                    </MenuItem>
                      :
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography onClick={() => navigate('/login')} textAlign="center">Sign in</Typography>
                    </MenuItem>
                }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Toolbar />
    </>
  );
}
export default Header;
