import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import store from "../../stores";

const Img = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
const RelativeBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Heart = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    transform: scale(1.3);
    transition: 0.3s;
  }
`;
const TitleBox = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  font-weight: bold;
  font-size: 13px;
`;
const ProductInfoBox = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  z-index: 1;
  font-size: 13px;
  text-align: left;
`;
const NameBox = styled.span`
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const ProductCard = ({
  id,
  image1,
  image2,
  title1,
  title2,
  title3,
  name,
  price,
  membersOnly,
  favorite,
  shoesColorId,
}) => {
  const [imageSrc, setImageSrc] = useState(image1);
  const [Like, setLike] = useState(false);
  const { wishlistStore } = store();

  const onImageHover = () => {
    setImageSrc(image2);
  };
  const onImageOut = () => {
    setImageSrc(image1);
  };

  const likeit = () => {
    if (!Like) {
      return (
        <FavoriteBorderOutlinedIcon
          style={{ fontSize: "20px" }}
          onClick={favoriteChange}
        />
      );
    } else {
      return (
        <FavoriteIcon style={{ fontSize: "20px" }} onClick={favoriteChange} />
      );
    }
  };
  const favoriteChange = async () => {
    if (Like) {
      setLike(false);
      // await wishlistStore.removeBasketItem(
      //   "Bearer " + sessionStorage.getItem("token"),
      //   id
      // );
    } else {
      setLike(true);
      await wishlistStore.addWishList(
        "Bearer " + sessionStorage.getItem("token"),
        shoesColorId
      );
    }
  };

  useEffect(() => {
    setLike(favorite ? favorite : false);
  }, []);

  useEffect(async () => {
    setImageSrc(image1);
  }, [image1]);

  return (
    <>
      <RelativeBox onMouseOver={onImageHover} onMouseOut={onImageOut}>
        <Link
          to={{
            pathname: `/detail/${id}`,
            id: id,
          }}
        >
          <Img src={imageSrc} />
        </Link>
        <Heart>{likeit()}</Heart>
        <TitleBox>
          <span>{title1}</span>
          {title2 ? (
            <span>
              <br />
              {title2}
            </span>
          ) : (
            ""
          )}
          {title3 ? (
            <span>
              <br />
              {title3}
            </span>
          ) : (
            ""
          )}
        </TitleBox>
        <ProductInfoBox>
          <NameBox>{name}</NameBox>
          <br />
          <div>{price}</div>
          <div style={{ color: "#00c3d7", marginTop: "3px" }}>
            {membersOnly ? "MEMBERS ONLY" : ""}
          </div>
        </ProductInfoBox>
      </RelativeBox>
    </>
  );
};

export default ProductCard;
