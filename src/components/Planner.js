import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {Redirect} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';
import CardItem from './Card';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Zoom } from '@material-ui/core';

const drawerWidth = 240;
const useStyles2 = makeStyles((theme) => ({
    div:{
        height:'-moz-calc(100% - 150px)',
        height:'-webkit-calc(100% - 150px)',
        height:'calc(100% - 170px)',
        overflowY:'scroll',
    }
  }));

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${0}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingBottom:theme.spacing(0)
  },
}));

function Planner(props) {
  const { window } = props;
  const classes = useStyles();
  const classes2 = useStyles2();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [closeSesion,setCloseSesion] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  if(closeSesion) return <Redirect to="/logout"/>
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider/>
      <ListItem button>
            <ListItemIcon><AccountCircleIcon style={{color:'blue'}}/></ListItemIcon>
            <ListItemText primary={"Juan Diaz Palacios Ramirez"} />
          </ListItem>
      <Divider />
      <List>
      <ListItem button onClick={()=>setCloseSesion(true)}>
            <ListItemIcon><CloseIcon style={{color:'red'}}/></ListItemIcon>
            <ListItemText primary={"Cerrar sesion"} />
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const tasks = [{
    "description": "Crear el front end",
    "responsible": {
        "name": "Santiago Carrillo",
        "email": "sancarbar@gmail.com"
    },
    "status": "ready",
    "dueDate": new Date(1995,11,17).toString()
},{
    "description": "Crear Back end",
    "responsible": {
        "name": "Santiago Carrillo",
        "email": "sancarbar@gmail.com"
    },
    "status": "ready",
    "dueDate": 156464645646
},{
    "description": "Corregir Fallos",
    "responsible": {
        "name": "Santiago Carrillo",
        "email": "sancarbar@gmail.com"
    },
    "status": "ready",
    "dueDate": 156464645646
}];
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{background:'orange'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Administrador de tareas
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <div className={classes2.div}>
            {tasks.map((data)=><CardItem status={data.status}
                people = {data.responsible.email}
                description={data.description}
                date={data.dueDate}/>)}
                </div>
            <div style={{width:'100%',height:'70px',textAlign:'right'}}>
            <Fab color="secondary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
      </main>
    </div>
  );
}

Planner.propTypes = {
  window: PropTypes.func,
};

export default Planner;