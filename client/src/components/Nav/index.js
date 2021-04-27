import React from 'react';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button: {
    color: "white",
    hover: "grey",
    marginLeft: "5px",
  }
}));

function Navigation(props) {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={() => setAnchorEl(null)}
    >
    <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
    <MenuItem onClick={() => handleMenuClick('/profile')}>My Profile</MenuItem>
    <MenuItem onClick={() => handleMenuClick('/posts')}>Posts</MenuItem>
    <MenuItem onClick={() => handleMenuClick('/create')}>Create</MenuItem>
    <Divider />
    <MenuItem onClick={() => handleMenuClick('/logout')}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <div >
      <AppBar position="static">
        <Toolbar>
        {isMobile ? (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        ) : ("")}
    
          <Typography className={classes.title} variant="h6" noWrap>
            Foodies
          </Typography>

          {!isMobile ? (
            <div>
                  <Button className={classes.button} onClick={() => handleButtonClick('/')}>
                    Home
                  </Button>

                  <Button className={classes.button} onClick={() => handleButtonClick('/profile')}>
                    My Profile
                  </Button>

                  <Button className={classes.button} onClick={() => handleButtonClick('/posts')}>
                    View Posts
                  </Button>

                  <Button className={classes.button} onClick={() => handleButtonClick('/create')}>
                    Create Posts
                  </Button>

                  <Button className={classes.button} onClick={() => handleButtonClick('/logout')}>
                    Logout
                  </Button>
          </div>
          ) : ("")}

          <div className={classes.grow} />

          <div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={() => handleButtonClick('/profile')}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

export default withRouter(Navigation);