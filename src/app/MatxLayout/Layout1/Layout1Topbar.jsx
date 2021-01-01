import React, { Children, Component,Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Icon, IconButton, MenuItem,Switch } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
import PropTypes from "prop-types";
import { MatxMenu, MatxSearchBox } from "matx";
import { isMdScreen, classList } from "utils";
import NotificationBar from "../SharedCompoents/NotificationBar";
import { Link } from "react-router-dom";
import ShoppingCart from "../SharedCompoents/ShoppingCart";
import { createMuiTheme } from '@material-ui/core/styles'
import Brand from "../SharedCompoents/Brand";
import $ from 'jquery';
const styles = theme => ({
  
  topbar: {
    "& .topbar-hold": {
      backgroundColor: 'white',
      height: "80px",
      "&.fixed": {
        boxShadow: theme.shadows[8],
        height: "5em"
      }
    }
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    minWidth: 185
  },


});
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
class Layout1Topbar extends Component {
  state = {  hidden: true };

  updateSidebarMode = sidebarSettings => {
    let { settings, setLayoutSettings } = this.props;

    setLayoutSettings({
      ...settings,
      layout1Settings: {
        ...settings.layout1Settings,
        leftSidebar: {
          ...settings.layout1Settings.leftSidebar,
          ...sidebarSettings
        }
      }
    });
  };

  handleSidebarToggle = () => {
    let { settings } = this.props;
    let { layout1Settings } = settings;

    let mode;
    if (isMdScreen()) {
      mode = layout1Settings.leftSidebar.mode === "close" ? "mobile" : "close";
    } else {
      mode = layout1Settings.leftSidebar.mode === "full" ? "close" : "full";
    }
    this.updateSidebarMode({ mode });
  };

  handleSignOut = () => {
    this.props.logoutUser();
  };
  handleSidenavToggle = () => {
    $("#eppmImage").hide() 
    
    let {
      settings: {
        layout1Settings: {
          leftSidebar: { mode }
        }
      }
    } = this.props;

    console.log(mode);

    this.updateSidebarMode({ mode: mode === "compact" &&  $("#eppmImage").show()  ? "full"  : "compact" });
   
  };
  
  renderLogoSwitch = () => (
   
    // Open Brand component file to replace logo and text
    <Brand>
      <Switch
        className="sidenav__toggle show-on-pc"
        onChange={this.handleSidenavToggle}
        checked={
          
          !(this.props.settings.layout1Settings.leftSidebar.mode === "full")
        }
        color="secondary"
      />
    </Brand>
  );
  render() {
    let { classes, fixed } = this.props;
    
    return (
      <div className={`topbar ${classes.topbar}`}>
        <div className={classList({ "topbar-hold": true, fixed: fixed })}>
       
          <div className="flex justify-between items-center h-full">
         
            <div className="flex">
           
              {/* <IconButton
                onClick={this.handleSidebarToggle}
                className="hide-on-pc"
              >
                <Icon>menu</Icon>
              </IconButton> */}
              <Brand >
                  <Switch
                    className=""
                    onChange={this.handleSidenavToggle}
                    checked={
                      !(this.props.settings.layout1Settings.leftSidebar.mode === "full")
                    }
                    color="secondary"
                  />
              </Brand>
            </div>
            <div className="flex items-center ">
           
     
    
              {/* <MatxSearchBox />

              <NotificationBar />

              <ShoppingCart></ShoppingCart> */}
              <MenuItem className="mt-0">
                  <Icon style={{color:'#30A2D5'}}> settings </Icon>
                  {/* <span className="pl-4"> Settings </span> */}
              </MenuItem>

              <MenuItem className="mt-1">
                  <Link
                    
                    to="/page-layouts/user-profile"
                  > 
                  <Icon style={{color:'#30A2D5'}}> person </Icon>
                  </Link>
                </MenuItem>
              <MatxMenu
                menuButton={
                  <img
                    className="mx-2 align-middle circular-image-small cursor-pointer"
                    src="/assets/images/face-6.jpg"
                    alt="user"
                  />}
                  style={{backgroundColor:'white'}}
              >
                <MenuItem style={{backgroundColor:'white'}}>
                  <Link className={classes.menuItem} to="/">
                    <Icon style={{color:'black'}}> home </Icon>
                    <span className="pl-4" style={{color:'black'}}> Home </span>
                  </Link>
                </MenuItem>
                
                <MenuItem
                  onClick={this.handleSignOut}
                  className={classes.menuItem}
                  style={{backgroundColor:'white'}}
                >
                  <Icon style={{color:'black'}}> power_settings_new </Icon>
                  <span className="pl-4" style={{color:'black'}}> Logout </span>
                </MenuItem>
              </MatxMenu>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Layout1Topbar.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  setLayoutSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  settings: state.layout.settings
});

export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(mapStateToProps, { setLayoutSettings, logoutUser })(Layout1Topbar)
  )
);
