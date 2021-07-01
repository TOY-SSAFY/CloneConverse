import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { observer } from "mobx-react";
import { observable, runInAction } from "mobx";
import styled from "styled-components";
import "../../styles/Headers/CategoryFilter.scss";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
// import icon_high from "../../resources/images/하이.png";
// import icon_low from "../../resources/images/로우.png";
// import icon_slip from "../../resources/images/슬립.png";
// import icon_platform from "../../resources/images/플랫폼.png";
// import icon_mid from "../../resources/images/미드.png";
import icon_high from "../../resources/images/하이배경제거.png";
import icon_low from "../../resources/images/로우배경제거.png";
import icon_slip from "../../resources/images/슬립배경제거.png";
import icon_platform from "../../resources/images/플랫폼배경제거.png";
import icon_mid from "../../resources/images/미드배경제거.png";
import icon_filter from "../../resources/images/icon_filter.png";
import load_Image from "../../resources/images/load_converse.png";
import Zoom from "@material-ui/core/Zoom";

import {
  ProductCard,
  VideoCard,
  PosterCard,
  ColorButton,
  InfiniteList,
} from "../molecules";
import store from "../../stores";
import { convertToPricingComma } from "../../utils/string";
import { ContactlessOutlined } from "@material-ui/icons";

const List_Box = styled.div`
  display: flex;
  // max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;
const Filter_Search_Title = styled.h3`
  position: relative;
  padding: 10px 0;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 16px;
  min-height: 12px;
  line-height: 1;
  color: #000;
  cursor: pointer;
  text-align: left;
  margin-bottom: 0;
`;
const Filter_Search_Content = styled.div`
  overflow: hidden;
  display: block;
  margin: 0;
  padding: 0;
  text-align: left;
`;

const Filter_Color_li = styled.li`
  display: inline-block;
  padding: 0;
  margin: 5px 11px 5px 0;
  min-width: auto;
  max-width: auto;
  vertical-align: top;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;
const Filter_Color_Btn = styled.button`
  position: relative;
  display: block;
  width: 23px;
  height: 23px;
  padding: 0;
  border-radius: 50%;
  background-size: 20px 20px;
  background-position: 50%;
  overflow: hidden;
  -webkit-transition: -webkit-transform 213ms ease-in-out;
  transition: -webkit-transform 213ms ease-in-out;
  transition: transform 213ms ease-in-out;
  transition: transform 213ms ease-in-out, -webkit-transform 213ms ease-in-out;
  font-size: 0;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
const Filter_Size_ul = styled.ul`
  margin: 0;
  font-size: 0;
  line-height: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border-top: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
  padding-left: 0px;
`;
const Filter_Silhouette_ul = styled.ul`
  border-left: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  margin: 0;
  font-size: 0;
  line-height: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;
const Filter_Size_li = styled.li`
  display: inline-block;
  width: 20%;
  padding: 0;
  min-width: auto;
  max-width: none;
  vertical-align: top;
  border-bottom: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
`;
const Filter_Silhouette_li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 6px;
  min-width: 50%;
  max-width: 100%;
  vertical-align: top;
  border-bottom: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;
const Filter_Size_Btn = styled.button`
  display: inline-block;
  width: 100%;
  border: 0;
  padding: 15px 0;
  outline: 0;
  font-size: 14px;
  line-height: 1;
  color: #000;
  word-break: break-all;
  word-wrap: break-word;
  background: #fff;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  font-family: "proxima-nova", "NanumGothic", sans-serif;
`;
const Filter_Silhouette_Btn = styled.button`
  display: inline-block;
  width: 100%;
  border: 0;
  padding: 0;
  outline: 0;
  font-size: 12px;
  line-height: 16px;
  color: #000;
  word-break: break-all;
  word-wrap: break-word;
  background: #fff;
  cursor: pointer;
`;
const Filter_MenuBar = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 16px;
`;
const Filter_List_filter = styled.div`
  width: 256px;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  color: #757575;
  border-right: 1px solid #e5e5e5;
  padding: 0 16px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  -webkit-transition: width 426ms cubic-bezier(0.4, 0.9, 0.3, 1),
    -webkit-flex-basis 426ms cubic-bezier(0.4, 0.9, 0.3, 1),
    -webkit-flex-basis 426ms cubic-bezier(0.4, 0.9, 0.3, 1);
  transition: width 426ms cubic-bezier(0.4, 0.9, 0.3, 1),
    -webkit-flex-basis 426ms cubic-bezier(0.4, 0.9, 0.3, 1),
    -webkit-flex-basis 426ms cubic-bezier(0.4, 0.9, 0.3, 1);
  transition: flex-basis 426ms cubic-bezier(0.4, 0.9, 0.3, 1),
    width 426ms cubic-bezier(0.4, 0.9, 0.3, 1);
  transition: flex-basis 426ms cubic-bezier(0.4, 0.9, 0.3, 1),
    width 426ms cubic-bezier(0.4, 0.9, 0.3, 1),
    -webkit-flex-basis 426ms cubic-bezier(0.4, 0.9, 0.3, 1),
    -webkit-flex-basis 426ms cubic-bezier(0.4, 0.9, 0.3, 1),
    -ms-flex-preferred-size 426ms cubic-bezier(0.4, 0.9, 0.3, 1);
`;
const Filter_List_Select = styled.select`
  width: 230px;
  font-size: 14px;
  color: #000;
  height: 58px;
  line-height: 60px;
  border: 0;
  border-left: 1px solid #e5e5e5;
  padding: 0 16px;
  background-color: #ffffff;
  background-position: right 16px center;
  background-image: url(
    data:image/svg + xml;charset=utf8,
    %3Csvgxmlns="http://www.w3.org/2000/svg"viewBox="0 0 46.7 36"%3E%3Cpathfill="%23000"d="M23.5 33.333L47 0H0z"/%3E%3C/svg%3E
  );
  -webkit-transition: color 107ms ease-in-out;
  transition: color 107ms ease-in-out;
  background-repeat: no-repeat;
  background-size: 9px 9px;
`;
const Filter_List_Option = styled.option`
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
`;
const Filter_List_Img = styled.img`
  fill: currentColor;
  width: 30px;
  height: 30px;
  color: #000;
`;
const Product_List_Box = styled.div`
  margin: 0 auto;
  padding: 12px 0 0;
  text-align: left;
  position: relative;
  min-height: 78px;
`;
const Product_List_Name = styled.div`
  text-align: left;
  font-size: 14px;
  color: #000;
  margin: 0;
  font-family: "proxima-nova", "NanumGothic", sans-serif;
  font-size: 14px !important;
  color: #000 !important;
  letter-spacing: -0.025em;
  display: block;
  line-height: 1.6;
`;
const Product_Color_Chip = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Product_Color_Size = styled.div`
  font-size: 14px;
  line-height: 30px;
  color: #000;
`;

const List = styled.ul`
  list-style: none;
  font-size: 16px;
  margin: 0;
  padding: 6px;
`;

const ListItem = styled.li`
  background-color: #fafafa;
  border: 1px solid #99b4c0;
  padding: 8px;
  margin: 4px;
`;

const ListContainer = styled.div`
  height: 600px;
  overflow: auto;
  background-color: #e4e4e4;
`;

const baseImgURL = "/assets/";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:focus": {
      outline: "none",
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
  },
}));

const CategoryFilter = observer(() => {
  const { shoeStore, authStore } = store();
  const classes = useStyles();
  const [state, setState] = React.useState({
    male: false,
    female: false,
    mule: false,
    snikers: false,
    sliper: false,
    platform: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });

    runInAction(() => {
      switch (event.target.name) {
        case "male":
        case "female":
          if (event.target.checked) {
            shoeStore.categoryfilter.gender.add(event.target.name);
          } else {
            shoeStore.categoryfilter.gender.delete(event.target.name);
          }
          break;
        case "mule":
        case "snikers":
        case "sliper":
        case "platform":
          if (event.target.checked) {
            shoeStore.categoryfilter.type.add(event.target.name);
          } else {
            shoeStore.categoryfilter.type.delete(event.target.name);
          }
          break;
      }
    });
  };

  const colorChoice = (e) => {
    e.target.classList.toggle("selected");
    runInAction(() => {
      if (shoeStore.categoryfilter.color.has(e.target.name)) {
        shoeStore.categoryfilter.color.delete(e.target.name);
      } else {
        shoeStore.categoryfilter.color.add(e.target.name);
      }
    });
  };

  const sizeChoice = (e) => {
    e.target.classList.toggle("btnSelected");
    runInAction(() => {
      if (shoeStore.categoryfilter.size.has(e.target.name)) {
        shoeStore.categoryfilter.size.delete(e.target.name);
      } else {
        shoeStore.categoryfilter.size.add(e.target.name);
      }
    });
  };
  const siluChoice = (e) => {
    if (e.target !== e.currentTarget) return;
    e.target.classList.toggle("siluSelected");
    runInAction(() => {
      if (shoeStore.categoryfilter.silhouette.has(e.target.name)) {
        shoeStore.categoryfilter.silhouette.delete(e.target.name);
      } else {
        shoeStore.categoryfilter.silhouette.add(e.target.name);
      }
    });
    console.log(shoeStore.categoryfilter.silhouette);
  };

  const onProductHover = (e) => {
    const colorSize = e.currentTarget.childNodes[2].childNodes[0];
    const colorTag = e.currentTarget.childNodes[2].childNodes[1];
    colorSize.style.display = "none";
    colorTag.style.display = "block";
  };

  const onProductOut = (e) => {
    const colorSize = e.currentTarget.childNodes[2].childNodes[0];
    const colorTag = e.currentTarget.childNodes[2].childNodes[1];
    colorSize.style.display = "block";
    colorTag.style.display = "none";
  };

  const filterToggle = () => {
    document.querySelector("#mside").classList.toggle("over");
    document.querySelector("#listfilter").classList.toggle("over");
    document.querySelector("#mcontent").classList.toggle("over");
    document.querySelector("#rcontent").classList.toggle("over");
    document.querySelector("#lcontent").classList.toggle("over");
  };
  const colorChange = (event, imageName, array, outerIndex, colorIndex) => {
    runInAction(() => {
      shoeStore.imageList[outerIndex].image1 =
        baseImgURL +
        shoeStore.shoesList[outerIndex].shoesColors[colorIndex].imageName +
        "1.jpg";
      shoeStore.imageList[outerIndex].image2 =
        baseImgURL +
        shoeStore.shoesList[outerIndex].shoesColors[colorIndex].imageName +
        "2.jpg";
    });
  };

  const infiniteScroll = async () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      runInAction(() => {
        shoeStore.pageNo += 1;
      });
      setLoading(true);
      await shoeStore.addShoesList("bearer " + sessionStorage.getItem("token"));
      setLoading(false);
    }
  };
  useEffect(async () => {
    await shoeStore.getShoesList("bearer " + sessionStorage.getItem("token"));
  }, [
    shoeStore.categoryfilter.gender.size,
    shoeStore.categoryfilter.type.size,
    shoeStore.categoryfilter.color.size,
    shoeStore.categoryfilter.size.size,
    shoeStore.categoryfilter.silhouette.size,
  ]);

  useEffect(async () => {
    window.addEventListener("scroll", infiniteScroll, true);
    await shoeStore.getShoesList("bearer " + sessionStorage.getItem("token"));
    console.log("shoeStore.shoesList", shoeStore.shoesList);
  }, []);

  return (
    <>
      <Modal
        className={classes.modal}
        open={loading}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Zoom in={loading}>
          <img src={load_Image}></img>
        </Zoom>
      </Modal>
      <List_Box>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Filter_MenuBar>
                  <div
                    style={{
                      padding: "0 20px",
                      height: "58px",
                      lineHeight: "60px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Filter_List_filter id="listfilter" onClick={filterToggle}>
                      <span>필터 숨기기</span>
                      <Filter_List_Img src={icon_filter}></Filter_List_Img>
                    </Filter_List_filter>
                    <div style={{ display: "flex", margin: "0 auto 0 0" }}>
                      <span
                        style={{
                          display: "block",
                          width: "100%",
                          textAlign: "left",
                          float: "left",
                          fontSize: "14px",
                          color: "#000",
                          fontWeight: 600,
                          padding: "0 16px",
                          margin: 0,
                        }}
                      >
                        총 {shoeStore.total}개의 상품
                      </span>
                    </div>
                    <Filter_List_Select>
                      <Filter_List_Option>신상품순</Filter_List_Option>
                      <Filter_List_Option>낮은가격순</Filter_List_Option>
                      <Filter_List_Option>높은가격순</Filter_List_Option>
                      <Filter_List_Option>인기상품순</Filter_List_Option>
                    </Filter_List_Select>
                  </div>
                </Filter_MenuBar>
              </Grid>

              <Grid item xs={2} id="lcontent">
                <div id="mside">
                  <div style={{ position: "relative" }}>
                    <Filter_Search_Title>구분</Filter_Search_Title>
                    <Filter_Search_Content>
                      <Grid container spacing={0}>
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.male}
                                color="default"
                                onChange={handleChange}
                                name="male"
                              />
                            }
                            label="남성"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.female}
                                color="default"
                                onChange={handleChange}
                                name="female"
                              />
                            }
                            label="여성"
                          />
                        </Grid>
                      </Grid>
                    </Filter_Search_Content>
                    <Filter_Search_Title
                      style={{
                        borderTop: "1px solid #e5e5e5",
                        paddingTop: "30px",
                      }}
                    >
                      제품타입
                    </Filter_Search_Title>
                    <Filter_Search_Content>
                      <Grid container spacing={0}>
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.mule}
                                color="default"
                                onChange={handleChange}
                                name="mule"
                              />
                            }
                            label="뮬"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.snikers}
                                color="default"
                                onChange={handleChange}
                                name="snikers"
                              />
                            }
                            label="스니커즈"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.sliper}
                                color="default"
                                onChange={handleChange}
                                name="sliper"
                              />
                            }
                            label="슬리퍼"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                fontSize="small"
                                // checkedIcon={<CheckBoxIcon fontSize="small" />}
                                checked={state.platform}
                                color="default"
                                onChange={handleChange}
                                name="platform"
                              />
                            }
                            label="플랫폼"
                          />
                        </Grid>
                      </Grid>
                    </Filter_Search_Content>
                    <Filter_Search_Title
                      style={{
                        borderTop: "1px solid #e5e5e5",
                        paddingTop: "30px",
                        marginBottom: "5px",
                      }}
                    >
                      색상
                    </Filter_Search_Title>
                    <ul
                      style={{
                        margin: "0px 0 0 5px",
                        paddingLeft: "0px",
                        paddingBottom: "15px",
                      }}
                    >
                      <Filter_Color_li>
                        <Filter_Color_Btn
                          style={{ background: "#000000" }}
                          onClick={colorChoice}
                          name="black"
                        ></Filter_Color_Btn>
                      </Filter_Color_li>
                      <Filter_Color_li>
                        <Filter_Color_Btn
                          style={{ background: "#0000ff" }}
                          onClick={colorChoice}
                          name="blue"
                        ></Filter_Color_Btn>
                      </Filter_Color_li>
                      <Filter_Color_li>
                        <Filter_Color_Btn
                          style={{ background: "#009900" }}
                          onClick={colorChoice}
                          name="green"
                        ></Filter_Color_Btn>
                      </Filter_Color_li>
                      <Filter_Color_li>
                        <Filter_Color_Btn
                          style={{ background: "#131936" }}
                          onClick={colorChoice}
                          name="navy"
                        ></Filter_Color_Btn>
                      </Filter_Color_li>
                      <Filter_Color_li>
                        <Filter_Color_Btn
                          style={{ background: "#6600CC" }}
                          onClick={colorChoice}
                          name="violet"
                        ></Filter_Color_Btn>
                      </Filter_Color_li>
                      <Filter_Color_li>
                        <Filter_Color_Btn
                          style={{ background: "#996633" }}
                          onClick={colorChoice}
                          name="brown"
                        ></Filter_Color_Btn>
                      </Filter_Color_li>
                      <Filter_Color_li>
                        <Filter_Color_Btn
                          style={{ background: "#999999" }}
                          onClick={colorChoice}
                          name="grey"
                        ></Filter_Color_Btn>
                      </Filter_Color_li>
                      <Filter_Color_li>
                        <Filter_Color_Btn
                          style={{ background: "#A39264" }}
                          onClick={colorChoice}
                          name="khaki"
                        ></Filter_Color_Btn>
                      </Filter_Color_li>
                      <Filter_Color_li>
                        <Filter_Color_Btn
                          style={{ background: "#F0E4D2" }}
                          onClick={colorChoice}
                          name="beige"
                        ></Filter_Color_Btn>
                      </Filter_Color_li>
                      <Filter_Color_li>
                        <Filter_Color_Btn
                          style={{ background: "#FF0000" }}
                          onClick={colorChoice}
                          name="red"
                        ></Filter_Color_Btn>
                      </Filter_Color_li>
                      <Filter_Color_li>
                        <Filter_Color_Btn
                          style={{ background: "#FF6600" }}
                          onClick={colorChoice}
                          name="orange"
                        ></Filter_Color_Btn>
                      </Filter_Color_li>
                      <Filter_Color_li>
                        <Filter_Color_Btn
                          style={{ background: "#FFB6C1" }}
                          onClick={colorChoice}
                          name="pink"
                        ></Filter_Color_Btn>
                      </Filter_Color_li>
                      <Filter_Color_li>
                        <Filter_Color_Btn
                          style={{ background: "#FFCC00" }}
                          onClick={colorChoice}
                          name="yellow"
                        ></Filter_Color_Btn>
                      </Filter_Color_li>
                      <Filter_Color_li>
                        <Filter_Color_Btn
                          style={{ background: "#ffffff" }}
                          onClick={colorChoice}
                          name="white"
                        ></Filter_Color_Btn>
                      </Filter_Color_li>
                    </ul>
                    <Filter_Search_Title
                      style={{
                        borderTop: "1px solid #e5e5e5",
                        paddingTop: "30px",
                        marginBottom: "5px",
                      }}
                    >
                      사이즈
                    </Filter_Search_Title>
                    <Filter_Size_ul>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="210">
                          210
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="215">
                          215
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="220">
                          220
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="225">
                          225
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="230">
                          230
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="235">
                          235
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="240">
                          240
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="245">
                          245
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="250">
                          250
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="255">
                          255
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="260">
                          260
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="265">
                          265
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="270">
                          270
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="275">
                          275
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="280">
                          280
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="285">
                          285
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="290">
                          290
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="295">
                          295
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="300">
                          300
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                      <Filter_Size_li>
                        <Filter_Size_Btn onClick={sizeChoice} name="305">
                          305
                        </Filter_Size_Btn>
                      </Filter_Size_li>
                    </Filter_Size_ul>
                    <Filter_Search_Title
                      style={{
                        borderTop: "1px solid #e5e5e5",
                        paddingTop: "30px",
                        marginBottom: "5px",
                      }}
                    >
                      실루엣
                    </Filter_Search_Title>
                    <Filter_Silhouette_ul>
                      <Filter_Silhouette_li>
                        <Filter_Silhouette_Btn onClick={siluChoice} name="하이">
                          <img src={icon_high}></img>
                          하이
                        </Filter_Silhouette_Btn>
                      </Filter_Silhouette_li>
                      <Filter_Silhouette_li>
                        <Filter_Silhouette_Btn onClick={siluChoice} name="로우">
                          <img src={icon_low}></img>
                          로우
                        </Filter_Silhouette_Btn>
                      </Filter_Silhouette_li>
                      <Filter_Silhouette_li>
                        <Filter_Silhouette_Btn onClick={siluChoice} name="미드">
                          <img src={icon_mid}></img>
                          미드
                        </Filter_Silhouette_Btn>
                      </Filter_Silhouette_li>
                      <Filter_Silhouette_li>
                        <Filter_Silhouette_Btn
                          onClick={siluChoice}
                          name="플랫폼"
                        >
                          <img src={icon_platform}></img>
                          플랫폼
                        </Filter_Silhouette_Btn>
                      </Filter_Silhouette_li>
                      <Filter_Silhouette_li>
                        <Filter_Silhouette_Btn onClick={siluChoice} name="슬립">
                          <img src={icon_slip}></img>
                          슬립
                        </Filter_Silhouette_Btn>
                      </Filter_Silhouette_li>
                    </Filter_Silhouette_ul>
                  </div>
                </div>
              </Grid>
              <Grid item xs={10} id="rcontent">
                <div id="mcontent">
                  <Grid container spacing={3}>
                    {shoeStore.shoesList.map((shoe, index, array) => (
                      <Grid
                        item
                        xs={3}
                        onMouseOver={onProductHover}
                        onMouseOut={onProductOut}
                      >
                        <Grid item xs={12}>
                          <ProductCard
                            id={shoe.id}
                            image1={
                              shoeStore.imageList[index] &&
                              shoeStore.imageList[index].image1
                                ? shoeStore.imageList[index].image1
                                : baseImgURL +
                                  shoe.shoesColors[0].imageName +
                                  "1.jpg"
                            }
                            image2={
                              shoeStore.imageList[index] &&
                              shoeStore.imageList[index].image2
                                ? shoeStore.imageList[index].image2
                                : baseImgURL +
                                  shoe.shoesColors[0].imageName +
                                  "2.jpg"
                            }
                            title1={shoe.state}
                          />
                        </Grid>
                        <Product_List_Box>
                          <Product_List_Name>
                            {shoe.shoesName}
                          </Product_List_Name>
                          <Product_List_Name>
                            {convertToPricingComma(shoe.shoesPrice) + "원"}
                          </Product_List_Name>
                        </Product_List_Box>
                        <Product_Color_Chip>
                          <Product_Color_Size>
                            {shoe.shoesColors.length + " 컬러"}
                          </Product_Color_Size>
                          <div style={{ display: "none" }}>
                            {shoe.shoesColorSizes.map((el, idx) => (
                              <Filter_Color_li
                                onMouseOver={(event) =>
                                  colorChange(
                                    event,
                                    el.imageName,
                                    array,
                                    index,
                                    idx
                                  )
                                }
                              >
                                <ColorButton color={el.color} />
                              </Filter_Color_li>
                            ))}
                          </div>
                        </Product_Color_Chip>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </List_Box>
    </>
  );
});

export default CategoryFilter;
