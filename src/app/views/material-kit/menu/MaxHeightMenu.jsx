import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Icon } from "@material-ui/core";

const options = [
  "Edit",
  "Delete",
  
];

const ITEM_HEIGHT = 48;

function MaxHeightMenu(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        aria-label="More"
        aria-owns={open ? "long-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Icon>more_vert</Icon>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 130,
            marginTop:'3em',
          }
        }}
      >
        {
            options.map(option => (

              <MenuItem
                key={option}
                selected={option === "Delete"}
                onClick={ props.deleted }
              >
              
              </MenuItem>
              

            ))
        }
      </Menu>
    </div>
  );

}

export default MaxHeightMenu;
