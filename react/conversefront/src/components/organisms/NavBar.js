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
import banner_memberonly from "../../resources/images/banner_memberonly.jpg";
import banner_bigsize from "../../resources/images/banner_bigsize.jpg";
import banner_denim from "../../resources/images/banner_denim.jpg";
import banner_espard from "../../resources/images/banner_espard.jpg";
import banner_summerdays from "../../resources/images/banner_summerdays.jpg";
import icon_magglass from "../../resources/images/magglass.png";
import Container from "@material-ui/core/Container";
import converseDance from "../../resources/videos/conversedance.mp4";
import TextField from "@material-ui/core/TextField";
import "../../styles/Headers/NavBar.scss";
import { Link } from "react-router-dom";

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
  object-fit: fill;
`;

const Inner_RowBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const SearchBox_FAQ = styled.div`
  // position: absolute;
  top: 180px;
  bottom: 0;
  left: -60px;
  z-index: 2;
  padding: 5%;
  text-align: left;
  display: flex;
  height: 130px;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  fontfamily: "proxima, NanumGothic, Arial, sans-serif";
`;
const SearchBox_Search = styled.div`
  // position: absolute;
  // top: 0px;
  bottom: 0;
  left: -60px;
  z-index: 2;
  padding: 5%;
  text-align: left;
  display: flex;
  height: 130px;
  align-items: flex-start;
  // justify-content: center;
  flex-direction: column;
  fontfamily: "proxima, NanumGothic, Arial, sans-serif";
`;
const SearchBox_Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #000;
  line-height: 1;
  padding-top: 50px;
`;

const SearchBox_Input = styled.input`
  border: 0;
  width: calc(100% - 38px);
  height: 48px;
  line-height: 48px;
  font-size: 20px;
  padding: 0 0 0 10px;
  margin: 0;
  font-weight: 700;
  display: inline-block;
`;
const SearchBox_Btn = styled.span`
  display: inline-block;
  cursor: pointer;
  width: 38px;
  height: 48px;
  line-height: 48px;
  text-align: center;
`;
const SearchBox_popularWord = styled.ul`
  // margin: 0 0 0 50px;
  padding: 0px 0 0 15px;
`;
const SearchBox_popularWordOl = styled.ol`
  margin-top: 24px;
`;
const SearchBox_popularWordList = styled.a`
  font-size: 18px;
  font-weight: 700;
  color: #000;
  line-height: 1;
`;
const LeftDrawer_Box = styled.div`
  position: absolute;
  left: 100px;
  top: 30px;
  width: 841px;
  height: calc(100vh - 130px);
  overflow: auto;
  padding: 0;
`;
const LeftDrawer_ul = styled.ul`
  // margin: 0 0 0 50px;
  padding: 0px 0 0 40px;
`;
const LeftDrawer_ol = styled.ol`
  margin-top: 24px;
`;
const LeftDrawer_recommend_li = styled.ol`
  margin: 0 0 0 0;
  font-size: 14px;
  line-height: 20px;
  color: #000;
  word-break: break-word;
  -webkit-flex-basis: 22%;
  -ms-flex-preferred-size: 22%;
  flex-basis: 22%;
  max-width: 20%;
`;
const LeftDrawer_list = styled.a`
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  color: #000;
  transition: all 0.3s;
  text-decoration: none;
`;
const LeftDrawer_SubTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: #000;
  margin-bottom: 15px;
  margin-left: 23px;
`;
const LeftDrawer_Img = styled.img`
  width: 100%;
  margin-bottom: 15px;
`;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "100%",
    flexShrink: 0,
  },
  drawer2: {
    width: "100%",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "100%",
    overflowY: "auto",
    top: 134,
    height: "680px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  drawerPaper2: {
    width: "50%",
    overflowY: "auto",
    top: 134,
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
}));

const NavBar = (props) => {
  const { history } = props;
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
  const [leftopen, setLeftOpen] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();

  const closeDrawer = (open) => (event) => {
    document.querySelector("#topSearch").classList.toggle("on");
    setOpen(false);
    setLeftOpen(false);
  };

  const SearchClick = () => {
    document.querySelector("#topSearch").classList.toggle("on");
    if (!open) {
      setOpen(true);
    }
  };
  const ShoeClick = () => {
    if (!open) {
      setLeftOpen(true);
    }
  };
  const MoveMyPage = () => {
    // const location = useLocation();
    // console.log(location);
    console.log(history);
    // history.push("/wishlist");
    // window.location.href = "/wishlist";
  };
  const MoveBasket = () => {
    window.location.href = "/BasketPage";
  };
  const MoveHome = () => {
    window.location.href = "/";
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          style={{
            "background-color": "white",
            color: "black",
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
              <Img src={converse_logo} alt="converse" onClick={MoveHome} />
              <RowBox>
                <MenuList onClick={ShoeClick}>??????</MenuList>
                <MenuList>??????</MenuList>
                <MenuList>??????</MenuList>
                <MenuList>???????????????</MenuList>
                <MenuList>????????????</MenuList>
              </RowBox>
            </FlexBox>

            {/* RIGHT BOX */}
            <FlexBox>
              <RowBox style={{ marginRight: "10px" }}>
                <MenuList>
                  <Link to="/login">
                    <PersonOutlineOutlinedIcon
                      style={{ verticalAlign: "middle", fontSize: "20px" }}
                    />
                  </Link>
                </MenuList>
                <MenuList>
                  <Link to="/BasketPage">
                    <ShoppingCartOutlinedIcon
                      style={{ verticalAlign: "middle", fontSize: "20px" }}
                    />
                  </Link>
                </MenuList>
                <MenuList>
                  <Link to="/wishlist">
                    <FavoriteBorderOutlinedIcon
                      style={{ verticalAlign: "middle", fontSize: "20px" }}
                    />
                  </Link>
                </MenuList>
                <MenuList>
                  <Link to="/wishlist">
                    <HelpOutlineOutlinedIcon
                      style={{ verticalAlign: "middle", fontSize: "20px" }}
                    />
                  </Link>
                </MenuList>
              </RowBox>
              <SearchBox onClick={SearchClick} id="topSearch">
                <div
                  style={{
                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  ??????
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
        open={leftopen}
        onClose={closeDrawer(false)}
        className={classes.drawer2}
        classes={{
          paper: classes.drawerPaper2,
        }}
      >
        <LeftDrawer_Box>
          <LeftDrawer_ul>
            <LeftDrawer_ol>
              <Link to="/category/shoes" style={{ textDecoration: "none" }}>
                <LeftDrawer_list>????????????</LeftDrawer_list>
              </Link>
            </LeftDrawer_ol>
            <LeftDrawer_ol>
              <LeftDrawer_list>???????????????</LeftDrawer_list>
            </LeftDrawer_ol>
            <LeftDrawer_ol>
              <LeftDrawer_list>????????? ???</LeftDrawer_list>
            </LeftDrawer_ol>
            <LeftDrawer_ol>
              <LeftDrawer_list>??? 70</LeftDrawer_list>
            </LeftDrawer_ol>
            <LeftDrawer_ol>
              <LeftDrawer_list>???????????? ?????????</LeftDrawer_list>
            </LeftDrawer_ol>
            <LeftDrawer_ol>
              <LeftDrawer_list>??????????????????</LeftDrawer_list>
            </LeftDrawer_ol>
            <LeftDrawer_ol>
              <LeftDrawer_list>?????????</LeftDrawer_list>
            </LeftDrawer_ol>
            <LeftDrawer_ol>
              <LeftDrawer_list>????????????</LeftDrawer_list>
            </LeftDrawer_ol>
            <LeftDrawer_ol>
              <LeftDrawer_list>????????????</LeftDrawer_list>
            </LeftDrawer_ol>
          </LeftDrawer_ul>
          <div
            style={{
              margin: "80px 0 0 59px",
              position: "relative",
              maxWidth: "560px",
            }}
          >
            <LeftDrawer_SubTitle>????????????</LeftDrawer_SubTitle>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
              }}
            >
              <LeftDrawer_recommend_li>
                <LeftDrawer_Img src={banner_bigsize}></LeftDrawer_Img>??? ?????????
              </LeftDrawer_recommend_li>
              <LeftDrawer_recommend_li>
                <LeftDrawer_Img src={banner_summerdays}></LeftDrawer_Img>??????
                ?????????
              </LeftDrawer_recommend_li>
              <LeftDrawer_recommend_li>
                <LeftDrawer_Img src={banner_espard}></LeftDrawer_Img>???????????????
              </LeftDrawer_recommend_li>
              <LeftDrawer_recommend_li>
                <LeftDrawer_Img src={banner_denim}></LeftDrawer_Img>?????? ??????
              </LeftDrawer_recommend_li>
            </ul>
          </div>
        </LeftDrawer_Box>
      </Drawer>

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
        <Container fixed>
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
                <Search_Inner_Img
                  src={banner_right}
                  alt="Search_Inner"
                  style={{ height: "353px" }}
                />
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
                      ????????? ???????????????????
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
                      -&gt; FAQ?????? ????????? ????????? ???????????????
                    </div>
                  </SearchBox_FAQ>
                </Grid>
                <Grid item xs={12}>
                  <Search_Inner_Img
                    src={banner_mule}
                    alt="Search_Inner"
                    style={{
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      zIndex: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  />
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
            >
              <Grid item xs={12}>
                <SearchBox_FAQ style={{ height: "161px" }}>
                  <div
                    style={{
                      fontSize: "30px",
                      fontWeight: "700",
                      lineHeight: "1.4",
                      marginBottom: "14px",
                      fontFamily: "NanumGothic, Arial, sans-serif",
                    }}
                  >
                    ???????????????
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
                    -&gt; ????????????
                  </div>
                </SearchBox_FAQ>
              </Grid>
              <Grid item xs={12}>
                <Search_Inner_Img
                  src={banner_memberonly}
                  alt="Search_Inner"
                  style={{ height: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <VideoCard
                  videoSrc={converseDance}
                  text="??? ????????????"
                  textStyle={{
                    left: "25px",
                    top: "45px",
                    fontSize: "30px",
                    fontFamily: "proxima, NanumGothic, Arial, sans-serif",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid item xs={12}>
                <SearchBox_Search style={{ height: "279px", width: "100%" }}>
                  <SearchBox_Title style={{ marginBottom: "50px" }}>
                    ??????
                  </SearchBox_Title>
                  <TextField
                    id="standard-basic"
                    placeholder="???????????? ??????????????????."
                    size="large"
                    style={{
                      border: 0,
                      width: "80%",
                      height: "48px",
                      lineHeight: "48px",
                      padding: "0 0 0 10px",
                      margin: 0,
                      fontWeight: 700,
                    }}
                  />
                </SearchBox_Search>
              </Grid>
              <Grid item xs={12}>
                <SearchBox_Search style={{ height: "279px", width: "100%" }}>
                  <SearchBox_Title
                    style={{ marginBottom: "20px", paddingTop: "0px" }}
                  >
                    ???????????????
                  </SearchBox_Title>
                  <SearchBox_popularWord>
                    <SearchBox_popularWordOl>
                      <SearchBox_popularWordList>
                        ????????????
                      </SearchBox_popularWordList>
                    </SearchBox_popularWordOl>
                    <SearchBox_popularWordOl>
                      <SearchBox_popularWordList>
                        ?????????
                      </SearchBox_popularWordList>
                    </SearchBox_popularWordOl>
                    <SearchBox_popularWordOl>
                      <SearchBox_popularWordList>
                        ??? 70
                      </SearchBox_popularWordList>
                    </SearchBox_popularWordOl>
                    <SearchBox_popularWordOl>
                      <SearchBox_popularWordList>
                        ?????????
                      </SearchBox_popularWordList>
                    </SearchBox_popularWordOl>
                  </SearchBox_popularWord>
                </SearchBox_Search>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Drawer>
    </>
  );
};

export default NavBar;
