import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import styled from "styled-components";
import converse_logo from "../../resources/images/converse_logo.png";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { ProductCard, VideoCard, PosterCard } from "../molecules";
import banner_right from "../../resources/images/banner_search_right.gif";
import banner_mule from "../../resources/images/banner_muleCollection.jpg";
import Container from "@material-ui/core/Container";

const FlexBox = styled.div`
  display: flex;
  line-height: 60px;
  height: 60px;
  flex-direction: row;
`;

const Img = styled.img`
  height: 60px;
  margin-right: 10px;
`;

const RowBox = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  fontfamily: "proxima, NanumGothic, Arial, sans-serif";

  :hover {
    color: gray;
    transition-duration: 0.2s;
  }
`;

const MenuList = styled.li`
  list-style: none;
  margin: 0 5px;
  font-weight: 600;
  padding: 5px;
  font-size: 14px;

  :hover {
    color: black;
    transition-duration: 0.2s;
  }
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  width: 200px;
  padding: 0 15px;
  margin: 0 auto;
  line-heigth: 60px;
  transition: width 426ms cubic-bezier(0.4, 0.9, 0.3, 1);
`;
const Drawer_Box = styled.div`
  position: fixed;
  top: 130px;
  left: -100%;
  right: 0;
  z-index: 12;
  height: 800px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  width: 100%;
  color: #000;
  background-color: #fff;
  transition: all 0.3s;
`;

const Search_Inner_Img = styled.img`
  top: 100px;
  width: 100%;
  height: 100%;
  max-height: 400px;
  object-fit: cover;
`;

const Inner_RowBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const SearchBox_FAQ = styled.div`
  position: absolute;
  top: 180px;
  bottom: 0;
  left: -60px;
  z-index: 2;
  padding: 5%;
  text-align: left;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  fontfamily: "proxima, NanumGothic, Arial, sans-serif";
`;
const SearchBox_OVER = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: opacity 0.6s cubic-bezier(0.4, 0.9, 0.3, 1),
    background-color 0.6s cubic-bezier(0.4, 0.9, 0.3, 1);
  opacity: 0;
  color: #fff;
`;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "100%",
    flexShrink: 0,
    // overflowY: "auto",
    // display: "flex",
    // flexWrap: "wrap",
    // flexDirection: "row",
  },
  drawerPaper: {
    width: "100%",
    overflowY: "auto",
    top: 134,
    height: "800px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
}));

const NavBar = (props) => {
  function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    console.log(trigger);

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
      position: trigger ? "fixed" : "static",
    });
  }
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();

  const closeDrawer = (open) => (event) => {
    setOpen(false);
  };

  const SearchClick = () => {
    if (!open) {
      setOpen(true);
      alert("안");
    }
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          style={{
            // "box-shadow": "none",
            "background-color": "white",
            color: "black",
            // "top": "70px"
            // "position": `${appBarPosition}`
          }}
        >
          <Toolbar
            style={{
              height: "60px",
              display: "flex",
              justifyContent: "space-between",
              "padding-right": 0,
            }}
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
              <RowBox style={{ marginRight: "10px" }}>
                <MenuList>
                  <PersonOutlineOutlinedIcon
                    style={{ verticalAlign: "middle", fontSize: "20px" }}
                  />
                </MenuList>
                <MenuList>
                  <ShoppingCartOutlinedIcon
                    style={{ verticalAlign: "middle", fontSize: "20px" }}
                  />
                </MenuList>
                <MenuList>
                  <FavoriteBorderOutlinedIcon
                    style={{ verticalAlign: "middle", fontSize: "20px" }}
                  />
                </MenuList>
                <MenuList>
                  <HelpOutlineOutlinedIcon
                    style={{ verticalAlign: "middle", fontSize: "20px" }}
                  />
                </MenuList>
              </RowBox>
              <SearchBox onClick={SearchClick}>
                <div
                  style={{
                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  검색
                </div>
                <div>
                  <SearchOutlinedIcon
                    style={{
                      color: "white",
                      verticalAlign: "middle",
                      fontSize: "20px",
                    }}
                  />
                </div>
              </SearchBox>
            </FlexBox>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={closeDrawer(false)}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Grid
          container
          spacing={0}
          style={{ width: "100%", height: "100%" }}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <Grid
            item
            xs={3}
            md
            style={{
              borderTop: "1px solid #e5e5e5",
              borderRight: "1px solid #e5e5e5",
            }}
          >
            <Grid item xs={12}>
              <Search_Inner_Img src={banner_right} alt="Search_Inner" />
            </Grid>
            <Grid item xs={12}>
              <Grid item xs={12}>
                <SearchBox_FAQ>
                  <div
                    style={{
                      fontSize: "30px",
                      fontWeight: "700",
                      lineHeight: "1.4",
                      marginBottom: "14px",
                      fontFamily: "NanumGothic, Arial, sans-serif",
                    }}
                  >
                    무엇을 도와드릴까요?
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      lineHeight: "1.4",
                      marginBottom: "14px",
                      fontFamily: "NanumGothic, Arial, sans-serif",
                    }}
                  >
                    -> FAQ에서 궁금한 내용을 찾아보세요
                  </div>
                </SearchBox_FAQ>
              </Grid>
              <Grid item xs={12}>
                123
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={3}
            md
            style={{
              borderTop: "1px solid #e5e5e5",
              borderRight: "1px solid #e5e5e5",
            }}
          ></Grid>
          <Grid
            item
            xs={3}
            md
            style={{
              borderTop: "1px solid #e5e5e5",
              borderRight: "1px solid #e5e5e5",
            }}
          ></Grid>
          <Grid
            item
            xs={3}
            md
            style={{
              borderTop: "1px solid #e5e5e5",
              borderRight: "1px solid #e5e5e5",
            }}
          ></Grid>
        </Grid>
      </Drawer>
    </>
  );
};

export default NavBar;
