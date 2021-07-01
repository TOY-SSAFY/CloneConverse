import React from "react";
import styled from "styled-components";
import { Grid, Box } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { convertToPricingComma } from "../../utils/string";
import store from "../../stores";

const Img = styled.img`
  width:80%;
  height: 80%;
  margin: 20px;
  cursor : pointer;
  text-align: center;
`
const Icon = styled.div`
  font-size: 15px;
  margin-top: 50px;
  cursor: pointer;
`
const Info = styled.p`
  font-size: 14px;
  margin: 0;
`
const Title = styled.div`
  font-size: 18px;
  font-weight: 550;
  color: #333;
  margin-bottom: 15px;
`
const Quantity = styled.input`
  width: 60px;
  line-height: 36px;
  height: 36px;
  padding: 0;
  text-align: center;
  font-size: 14px;
  border: 1px solid #e5e5e5;
  color: #000;
  float: left;
`
const Updown = styled.a`
  width: 36px;
  height: 36px;
  line-height: 36px;
  border: 1px solid #e5e5e5;
  margin-left: -1px;
  float: left;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
`

const OptionModify = styled.span`
  font-size: 14px;
  color: #757575;
  text-decoration: underline;
  margin-left: 10px;
  cursor: pointer;
`

const ProductDetailCard = ({
  image,
  title,
  color,
  size,
  quantity,
  price,
  id
}) => {
  const { basketStore } = store();
  const removeItem = async() =>{
    await basketStore.removeBasketItem("Bearer " + sessionStorage.getItem("token"), id);
    await basketStore.getBasketList("Bearer " + sessionStorage.getItem("token"));
  }
  return (
      <div style={{
          height: "190px"
      }}>
          <Grid container spacing={0}>
        <Grid item xs={2}>
        <Img
          src={image} 
        />
              </Grid>
        <Grid item xs={7}>
          <div style={{
            textAlign: "left",
            margin: "20px"
          }}>
            <Title>{title}</Title>
            <Info>{color} / {size}</Info>
            <Info>수량 {quantity}</Info>
            <Grid container spacing={0}>
              <Grid item xs={4}>
                <Icon><FavoriteBorderOutlinedIcon style={{ "fontSize": "18px" }} />위시리스트 추가</Icon>
                </Grid>
              <Grid item xs={4}>
                  <Icon><AccessTimeIcon style={{ "fontSize": "18px" }}/>나중에 구매하기</Icon>
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
            
          </div>
        </Grid>
        <Grid item xs={3}>
          <div style={{
            textAlign: "right",
            height: "80%",
            margin: "20px"
          }}>
            <div>{convertToPricingComma(price)}원</div>
            <div style={{"float" : "right", "margin-top" : "10px", "width" : "100%" , "marginBottom" : "50px"}}>
              <span style={{ "float": "right" }}>
                <Quantity value={quantity}/>
                <Updown>
              <RemoveIcon style={{ "fontSize": "20px" }} />
                </Updown>
                <Updown>
                <AddIcon style={{ "fontSize": "20px" }}/>
                </Updown>
              </span>
            </div>
            <div >
              <span>
              <OptionModify>옵션변경</OptionModify>
                <OptionModify onClick = {removeItem}>삭제</OptionModify>

              </span>
            
              </div>
          </div>
              </Grid>
          </Grid>
        
    </div>
  );
};

export default ProductDetailCard;