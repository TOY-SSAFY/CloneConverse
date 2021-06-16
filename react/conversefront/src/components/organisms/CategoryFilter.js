import React, { useState } from "react";
import styled from "styled-components";
import "../../styles/Headers/CategoryFilter.scss";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import icon_high from "../../resources/images/하이.png";
import icon_low from "../../resources/images/로우.png";
import icon_slip from "../../resources/images/슬립.png";
import icon_platform from "../../resources/images/플랫폼.png";
import icon_mid from "../../resources/images/미드.png";
import icon_filter from "../../resources/images/icon_filter.png";
import chuck70pink from "../../resources/images/chuck_70_seasonal_canvas_pink.jpg";
import chuck70pink2 from "../../resources/images/chuck_70_seasonal_canvas_pink2.jpg";
import chuck70mint from "../../resources/images/chuck_70_seasonal_canvas_mint.jpg";
import chuck70mint2 from "../../resources/images/chuck_70_seasonal_canvas_mint2.jpg";
import chuck70poster from "../../resources/images/chuck70_seasonal_canvas_poster.jpg";
import { ProductCard, VideoCard, PosterCard } from "../molecules";

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
  font-family: "proxima-nova", "Nanum Gothic", sans-serif;
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

const CategoryFilter = () => {
  const [state, setState] = React.useState({
    man: false,
    woman: false,
    mule: false,
    snikers: false,
    sliper: false,
    platform: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const filterToggle = () => {
    document.querySelector("#mside").classList.toggle("over");
    document.querySelector("#listfilter").classList.toggle("over");
    document.querySelector("#mcontent").classList.toggle("over");
  };

  return (
    <>
      <List_Box>
        <Grid container spacing={0}>
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
                    총 322개의 상품
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
          <div id="mside">
            <div style={{ position: "relative" }}>
              <Filter_Search_Title>구분</Filter_Search_Title>
              <Filter_Search_Content>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.man}
                          color="default"
                          onChange={handleChange}
                          name="man"
                        />
                      }
                      label="남성"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.woman}
                          color="default"
                          onChange={handleChange}
                          name="woman"
                        />
                      }
                      label="여성"
                    />
                  </Grid>
                </Grid>
              </Filter_Search_Content>
              <Filter_Search_Title
                style={{ borderTop: "1px solid #e5e5e5", paddingTop: "30px" }}
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
                  ></Filter_Color_Btn>
                </Filter_Color_li>
                <Filter_Color_li>
                  <Filter_Color_Btn
                    style={{ background: "#0000ff" }}
                  ></Filter_Color_Btn>
                </Filter_Color_li>
                <Filter_Color_li>
                  <Filter_Color_Btn
                    style={{ background: "#009900" }}
                  ></Filter_Color_Btn>
                </Filter_Color_li>
                <Filter_Color_li>
                  <Filter_Color_Btn
                    style={{ background: "#131936" }}
                  ></Filter_Color_Btn>
                </Filter_Color_li>
                <Filter_Color_li>
                  <Filter_Color_Btn
                    style={{ background: "#6600CC" }}
                  ></Filter_Color_Btn>
                </Filter_Color_li>
                <Filter_Color_li>
                  <Filter_Color_Btn
                    style={{ background: "#996633" }}
                  ></Filter_Color_Btn>
                </Filter_Color_li>
                <Filter_Color_li>
                  <Filter_Color_Btn
                    style={{ background: "#999999" }}
                  ></Filter_Color_Btn>
                </Filter_Color_li>
                <Filter_Color_li>
                  <Filter_Color_Btn
                    style={{ background: "#A39264" }}
                  ></Filter_Color_Btn>
                </Filter_Color_li>
                <Filter_Color_li>
                  <Filter_Color_Btn
                    style={{ background: "#F0E4D2" }}
                  ></Filter_Color_Btn>
                </Filter_Color_li>
                <Filter_Color_li>
                  <Filter_Color_Btn
                    style={{ background: "#FF0000" }}
                  ></Filter_Color_Btn>
                </Filter_Color_li>
                <Filter_Color_li>
                  <Filter_Color_Btn
                    style={{ background: "#FF6600" }}
                  ></Filter_Color_Btn>
                </Filter_Color_li>
                <Filter_Color_li>
                  <Filter_Color_Btn
                    style={{ background: "#FFB6C1" }}
                  ></Filter_Color_Btn>
                </Filter_Color_li>
                <Filter_Color_li>
                  <Filter_Color_Btn
                    style={{ background: "#FFCC00" }}
                  ></Filter_Color_Btn>
                </Filter_Color_li>
                <Filter_Color_li>
                  <Filter_Color_Btn
                    style={{ background: "#ffffff" }}
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
                  <Filter_Size_Btn>210</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>215</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>220</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>225</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>230</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>235</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>240</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>245</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>250</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>255</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>260</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>265</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>270</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>275</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>280</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>285</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>290</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>295</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>300</Filter_Size_Btn>
                </Filter_Size_li>
                <Filter_Size_li>
                  <Filter_Size_Btn>305</Filter_Size_Btn>
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
                  <Filter_Silhouette_Btn>
                    <img src={icon_high}></img>
                    하이
                  </Filter_Silhouette_Btn>
                </Filter_Silhouette_li>
                <Filter_Silhouette_li>
                  <Filter_Silhouette_Btn>
                    <img src={icon_low}></img>
                    로우
                  </Filter_Silhouette_Btn>
                </Filter_Silhouette_li>
                <Filter_Silhouette_li>
                  <Filter_Silhouette_Btn>
                    <img src={icon_mid}></img>
                    미드
                  </Filter_Silhouette_Btn>
                </Filter_Silhouette_li>
                <Filter_Silhouette_li>
                  <Filter_Silhouette_Btn>
                    <img src={icon_platform}></img>
                    플랫폼
                  </Filter_Silhouette_Btn>
                </Filter_Silhouette_li>
                <Filter_Silhouette_li>
                  <Filter_Silhouette_Btn>
                    <img src={icon_slip}></img>
                    슬립
                  </Filter_Silhouette_Btn>
                </Filter_Silhouette_li>
              </Filter_Silhouette_ul>
            </div>
          </div>
          <div id="mcontent">
            <Grid container spacing={3}>
              <Grid item xs={3} md>
                <ProductCard
                  image1={chuck70pink}
                  image2={chuck70pink2}
                  title1="BEST SELLER"
                  title2="NEW ARRIVAL"
                  name="척 70 시즈널 캔버스"
                  price="99,000원"
                />
              </Grid>
              <Grid item xs={3} md>
                <ProductCard
                  image1={chuck70pink}
                  image2={chuck70pink2}
                  title1="BEST SELLER"
                  title2="NEW ARRIVAL"
                  name="척 70 시즈널 캔버스"
                  price="99,000원"
                />
              </Grid>
              <Grid item xs={3} md>
                <ProductCard
                  image1={chuck70pink}
                  image2={chuck70pink2}
                  title1="BEST SELLER"
                  title2="NEW ARRIVAL"
                  name="척 70 시즈널 캔버스"
                  price="99,000원"
                />
              </Grid>
              <Grid item xs={3} md>
                <ProductCard
                  image1={chuck70pink}
                  image2={chuck70pink2}
                  title1="BEST SELLER"
                  title2="NEW ARRIVAL"
                  name="척 70 시즈널 캔버스"
                  price="99,000원"
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </List_Box>
    </>
  );
};

export default CategoryFilter;
