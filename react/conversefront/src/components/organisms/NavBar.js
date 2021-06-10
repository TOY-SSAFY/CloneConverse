import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import styled from 'styled-components'
import converse_logo from "../../resources/images/converse_logo.png"
import { Typography } from '@material-ui/core';

const FlexBox = styled.div`
  display : flex;
  line-height:60px;
  height:60px;
  flex-direction : row;
`

const Img = styled.img`
  height : 60px;
  margin-right : 10px;
`

const RowBox = styled.ul`
  display : flex;
  flex-direction : row;
  align-items : center;
  padding:0;
  fontFamily: "proxima, NanumGothic, Arial, sans-serif";

  :hover {
    color : gray;
    transition-duration:0.2s;
  }
`

const MenuList = styled.li`
  list-style:none;
  margin : 0 5px;
  font-weight: 600;
  padding : 5px;
  font-size : 14px;
  
  :hover {
    color : black;
    transition-duration:0.2s;
  }
`

const SearchBox = styled.div`
  display : flex;
  flex-direction : row;
  justify-content : space-between;
  background-color : black;
  width : 200px;
  padding:0 15px;
  margin : 0 auto;
  line-heigth:60px;
`

const NavBar = (props) => {

  function ElevationScroll (props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    console.log(trigger)

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
      position: trigger ? "fixed" : "static"
    });
  }

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          style={{
            // "box-shadow": "none",
            "background-color": "white",
            "color": "black",
            // "top": "70px"
            // "position": `${appBarPosition}`
          }}
        >
          <Toolbar
            style={{"height":"60px", 'display':"flex", "justifyContent":"space-between", "padding-right":0}}
          >
            {/* LEFT BOX */}
            <FlexBox>
              <Img src={converse_logo} alt="converse" />
              <RowBox>
                <MenuList>신발</MenuList>
                <MenuList>의류</MenuList>
                <MenuList>아동</MenuList>
                <MenuList>런칭캘린더</MenuList>
                <MenuList>회원전용</MenuList>
              </RowBox>
            </FlexBox>

            {/* RIGHT BOX */}
            <FlexBox>
              <RowBox
                style={{"marginRight" :"10px"}}
              >
                <MenuList>
                  <PersonOutlineOutlinedIcon style={{"verticalAlign" : "middle", "fontSize":"20px"}} />
                </MenuList>
                <MenuList>
                  <ShoppingCartOutlinedIcon  style={{"verticalAlign" : "middle", "fontSize":"20px"}} />
                </MenuList>
                <MenuList>
                  <FavoriteBorderOutlinedIcon  style={{"verticalAlign" : "middle", "fontSize":"20px"}} />
                </MenuList>
                <MenuList>
                  <HelpOutlineOutlinedIcon  style={{"verticalAlign" : "middle", "fontSize":"20px"}} />
                </MenuList>
              </RowBox>
              <SearchBox>
                <div
                  style={{
                    'color' : 'white',
                    "fontSize": "14px",
                  }}
                >
                  검색
                </div>
                <div>
                  <SearchOutlinedIcon style={{"color":"white", "verticalAlign" : "middle", "fontSize":"20px"}} />
                </div>
              </SearchBox>
            </FlexBox>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  )
}

export default NavBar