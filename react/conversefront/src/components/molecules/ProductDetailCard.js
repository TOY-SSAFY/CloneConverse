import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid, Box } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { convertToPricingComma } from "../../utils/string";
import store from "../../stores";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";

const Img = styled.img`
  width: 80%;
  height: 80%;
  margin: 20px;
  cursor: pointer;
  text-align: center;
`;
const Icon = styled.div`
  font-size: 15px;
  margin-top: 50px;
  cursor: pointer;
`;
const Info = styled.p`
  font-size: 14px;
  margin: 0;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 550;
  color: #333;
  margin-bottom: 15px;
`;
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
`;
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
`;

const OptionModify = styled.span`
  font-size: 14px;
  color: #757575;
  text-decoration: underline;
  margin-left: 10px;
  cursor: pointer;
`;

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const ProductDetailCard = ({
  image,
  title,
  color,
  size,
  quantity,
  price,
  id,
  shoesid,
}) => {
  const { basketStore, shoeStore } = store();
  const [Count, setCount] = useState(0);
  const removeItem = async () => {
    await basketStore.removeBasketItem(
      "Bearer " + sessionStorage.getItem("token"),
      id
    );
    await basketStore.getBasketList(
      "Bearer " + sessionStorage.getItem("token")
    );
  };
  const PlusCount = () => {
    setCount(Count + 1);
    console.log(Count);
  };
  const MinusCount = () => {
    if (Count > 0) {
      setCount(Count - 1);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(async () => {
    setCount(quantity);
    // const shoesDetail = await shoeStore.getShoeDetail(
    //   "Bearer " + sessionStorage.getItem("token"),
    //   shoesid
    // );
    // console.log("shoesDetail", shoesDetail);
  }, []);

  useEffect(() => {
    // setCount(quantity);
  }, [Count]);

  return (
    <div
      style={{
        height: "190px",
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Img src={image} />
        </Grid>
        <Grid item xs={7}>
          <div
            style={{
              textAlign: "left",
              margin: "20px",
            }}
          >
            <Title>{title}</Title>
            <Info>
              {color} / {size}
            </Info>
            <Info>수량 {quantity}</Info>
            <Grid container spacing={0}>
              <Grid item xs={4}>
                <Icon>
                  <FavoriteBorderOutlinedIcon style={{ fontSize: "18px" }} />
                  위시리스트 추가
                </Icon>
              </Grid>
              <Grid item xs={4}>
                <Icon>
                  <AccessTimeIcon style={{ fontSize: "18px" }} />
                  나중에 구매하기
                </Icon>
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            style={{
              textAlign: "right",
              height: "80%",
              margin: "20px",
            }}
          >
            <div>{convertToPricingComma(price)}원</div>
            <div
              style={{
                float: "right",
                "margin-top": "10px",
                width: "100%",
                marginBottom: "50px",
              }}
            >
              <span style={{ float: "right" }}>
                <Quantity value={Count} />
                <Updown>
                  <RemoveIcon
                    style={{ fontSize: "20px" }}
                    onClick={MinusCount}
                  />
                </Updown>
                <Updown>
                  <AddIcon style={{ fontSize: "20px" }} onClick={PlusCount} />
                </Updown>
              </span>
            </div>
            <div>
              <span>
                <Button
                  aria-controls="customized-menu"
                  aria-haspopup="true"
                  variant="outlined"
                  onClick={handleClick}
                >
                  옵션변경
                </Button>
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <StyledMenuItem>
                    <ListItemIcon>
                      <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <ListItemIcon>
                      <DraftsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <ListItemIcon>
                      <InboxIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </StyledMenuItem>
                </StyledMenu>
                <OptionModify onClick={removeItem}>삭제</OptionModify>
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetailCard;
