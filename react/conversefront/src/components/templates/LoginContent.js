import { Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const OuterBox = styled.div`
  margin: 80px auto;
  border: 1px solid #e5e5e5;
  padding: 60px 40px;
  max-width: 540px;
  position: relative;
`;
const OuterBox_Title = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
`;
const OuterBox_Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 50px;
  margin: 0 0 10px 0;
  padding: 0 20px;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  font-size: 14px;
  color: #000;
  box-sizing: border-box;
`;
const OuterBox_OptionBox = styled.div`
  padding: 10px 0 0;
`;
const OuterBox_Option_Inner_Box = styled.span`
  padding: 10px 0 0;
`;
const OuterBox_Login_Keep = styled.input`
  margin: 0 5px 0 0;
  width: 14px;
  height: 14px;
  border: 0;
  cursor: pointer;
  background: none;
  -webkit-appearance: none;
  position: relative;
`;
const OuterBox_Login_Button = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  line-height: 50px;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  background: #000;
  border: 1px solid #000;
  cursor: pointer;
`;

const LoginContent = () => {
  const [state, setState] = React.useState({
    keep: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <>
      <OuterBox>
        <OuterBox_Title>로그인</OuterBox_Title>
        <OuterBox_Input placeholder="이메일"></OuterBox_Input>
        <OuterBox_Input placeholder="패스워드"></OuterBox_Input>
        <OuterBox_OptionBox>
          {/* <OuterBox_Option_Inner_Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.man}
                  color="default"
                  onChange={handleChange}
                  name="keep"
                />
              }
              label="로그인 상태 유지"
            />
          </OuterBox_Option_Inner_Box> */}
          <OuterBox_Login_Button>로그인</OuterBox_Login_Button>
        </OuterBox_OptionBox>
      </OuterBox>
    </>
  );
};

export default LoginContent;