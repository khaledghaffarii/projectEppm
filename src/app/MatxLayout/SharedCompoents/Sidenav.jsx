import React, { Fragment } from "react";
import Scrollbar from "react-perfect-scrollbar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container,Table ,Button,Form} from 'react-bootstrap'
import { navigations } from "../../navigations";
import { MatxVerticalNav } from "matx";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";

const Sidenav = props => {

  const updateSidebarMode = sidebarSettings => {

    let { settings, setLayoutSettings } = props;
    let activeLayoutSettingsName = settings.activeLayout + "Settings";
    let activeLayoutSettings = settings[activeLayoutSettingsName];
    
    setLayoutSettings({
      ...settings,
      [activeLayoutSettingsName]: {
        ...activeLayoutSettings,
        leftSidebar: {
          ...activeLayoutSettings.leftSidebar,
          ...sidebarSettings
        }
      }
    });

  };

  const renderOverlay = () => (
    <div
      onClick={() => updateSidebarMode({ mode: "close" })}
      className="sidenav__overlay"
    />
  );

  return (
     
       <Container className="col-sm-12 mr-1">
    <Fragment>
       <img
       id="eppmImage"
       style={{width:'10em',height:'4em',marginTop:'5em'}}
                    className="ml-9"
                    src="/assets/images/eppm.png"
                    alt="user"
           /> 
        
         
         
        <Scrollbar
        style={{marginTop:'4em'}}
        options={{ suppressScrollX: true }}
        className="scrollable position-relative"
        >{/* {props.children} */} {props.children}
          
          <MatxVerticalNav navigation={navigations} />
        </Scrollbar>
        {renderOverlay()}
    </Fragment>
        </Container>
       
  );
};

Sidenav.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  setLayoutSettings: PropTypes.func.isRequired,
  settings: state.layout.settings
});

export default withRouter(
  connect(mapStateToProps, {
    setLayoutSettings
  })(Sidenav)
);
