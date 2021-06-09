import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import styled from 'styled-components'
import converse_logo from "../../resources/images/converse_logo.png"

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Img = styled.img`
  width : 120px;
`

const RowBox = styled.ul`
  display : flex;
  flex-direction:row;
  height : 60px;
  line-height: 60px;
`

const MenuList = styled.li`
  list-style:none;
  margin : 0 10px;
`

const NavBar = (props) => {
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          style={{
            "box-shadow": "none",
            "background-color": "white",
            "color" : "black"
          }}
        >
          <Toolbar
            style={{"minHeight":"60px"}}
          >
            <Img src={converse_logo} alt="converse" />
            <RowBox>
              <MenuList>신발</MenuList>
              <MenuList>의류</MenuList>
              <MenuList>아동</MenuList>
              <MenuList>런칭캘린더</MenuList>
              <MenuList>회원전용</MenuList>
            </RowBox>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  )
}

export default NavBar