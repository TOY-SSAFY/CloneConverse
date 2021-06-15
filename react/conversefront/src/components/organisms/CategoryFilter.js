import React, { useState } from "react";
import styled from "styled-components";
import "../../styles/Headers/CategoryFilter.scss";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";

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
  return (
    <>
      <List_Box>
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
          </div>
        </div>
        <div id="mcontent">123</div>
      </List_Box>
    </>
  );
};

export default CategoryFilter;
