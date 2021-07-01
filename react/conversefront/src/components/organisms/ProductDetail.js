import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import bigimg from "../../resources/images/bigImg.jpg";
import "../../styles/Detail/ProductDetail.scss";
import { useParams } from "react-router-dom";
import store from "../../stores";
import { convertToPricingComma } from "../../utils/string";
import { blue } from "@material-ui/core/colors";

const Info = styled.div`
  box-sizing: border-box;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  text-align: left;
  margin: 0;
  padding: 0;
`;

const Fixbox = styled.div`
  max-width: 400px;
  clear: both;
  padding: 30px 0 30px 0;
`;

const DetailName = styled.div`
  font-size: 20px;
  color: #1a1a1a;
  line-height: 28px;
  margin-bottom: 12px;
  letter-spacing: -0.025em;
  font-weight: 600;
  position: relative;
  word-break: keep-all;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const DetailDesc = styled.div`
  margin: 0;
  padding-bottom: 24px;
  border-bottom: 1px solid #e5e5e5;
`;

const DetailPriceUL = styled.ul`
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const DetailPrice = styled.li`
  width: 100%;
  float: left;
  margin-right: 10px;
  line-height: 24px;
  font-size: 18px;
  color: #000;
  font-weight: 400;
  margin: 0 10px 0 0;
  letter-spacing: -0.025em;
  padding: 0;
`;

const DetailGender = styled.div`
  margin-top: 14px;
  font-size: 14px;
  color: #757575;
  font-weight: 800;
  line-height: 20px;
`;

const SimpleDesc = styled.div`
  margin-top: 14px;
  font-size: 16px;
  color: #000;
  line-height: 22px;
  clear: both;
`;
const More = styled.a`
  font-size: 14px;
  color: #757575;
  text-decoration: underline;
  display: inline-block;
`;

const RelationTop = styled.div`
  padding: 15px 0 0;
  line-height: 1.3;
  position: relative;
  z-index: 5;
`;

const DummyBox = styled.div`
  position: relative;
`;

const PrdBoard = styled.div`
  margin: 0;
  padding: 0;
`;

const ProdAction = styled.div`
  margin: 24px 0 0 0;
  position: relative;
  padding: 0;
`;

const Customoption = styled.div`
  float: left;
  font-size: 14px;
  color: #757575;
`;

const PrdCode = styled.div`
  float: right;
  font-size: 12px;
  color: #757575;
`;

const PrdRelationDummy = styled.div`
  position: relative;
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
  z-index: 2;
  background-color: #fff;
`;

const DummyList = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const PrdListUl = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-width: 100%;
  margin: 0;
  padding: 0;
  font-size: 0;
  line-height: 0;
  position: relative;
`;

const PrdListLi = styled.li`
  width: 19%;
  margin: 15px 1% 0 0;
  position: relative;
  display: inline-block;
  color: #757575;
  vertical-align: top;
`;
const prdTable = styled.table`
  table-layout: fixed;
  border: 0 none;
  border-spacing: 0;
  border-collapse: collapse;
`;

const TableLi = styled.li`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: inline-block;
  margin: 0 -1px -1px 0;
  vertical-align: top;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  background: #fff;
  padding: 0;
`;

const Size = styled.a`
  display: block;
  font-size: 14px;
  min-width: 27px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  word-break: break-all;
  margin: 0;
  padding: 0;
`;

const SizeSpan = styled.span`
  cursor: pointer;
  display: inline-block;
  padding: 0;
  box-sizing: border-box;
  word-break: break-all;
  margin: 0;
`;

const BaseQty = styled.div`
  margin-top: 30px;
  padding: 0;
`;

const Qantity = styled.div`
  width: 70px;
  line-height: 50px;
  height: 50px;
  padding: 0;
  text-align: center;
  font-size: 14px;
  border: 1px solid #e5e5e5;
  color: #000;
  float: left;
`;
const QtyUpDown = styled.a`
  width: 50px;
  height: 50px;
  line-height: 60px;
  border: 1px solid #e5e5e5;
  margin-left: -1px;
  float: left;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
`;
const BuyDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

const CartBtn = styled.a`
  display: block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-right: 5px;
  border: 1px solid #000;
  text-decoration: none;
  background-color: #fff;
  :hover {
    background-color: #fff;
    color: #000;
    opacity: 0.6;
  }
`;

const BuyBtn = styled.a`
  display: block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-right: 5px;
  border: 1px solid #000;
  text-decoration: none;
  background-color: #000;
  color: #fff;
  :hover {
    background-color: #fff;
    color: #000;
  }
`;

const LikeBtn = styled.div`
  display: block;
  margin: 0;
  width: 50px;
  min-width: 50px;
  height: 48px;
  line-height: 60px;
  border: 1px solid #000;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-color: #fff;
`;

const ProductDetail = () => {
  let params = useParams();
  const [ProductDetail, setProductDetail] = useState({});
  const [VariableSize, setVariableSize] = useState([]);
  const [Count, setCount] = useState(0);
  const [SelectSize, setSelectSize] = useState(0);
  const [SelectColor, setSelectColor] = useState("");
  const { shoeStore, basketStore } = store();

  const PlusCount = () => {
    setCount(Count + 1);
  };
  const MinusCount = () => {
    if (Count > 0) {
      setCount(Count - 1);
    }
  };
  const sendBasket = async () => {
    if (Count > 0) {
      setCount(Count - 1);
    }
    const data = {
      shoes_id: params.id,
      color_id: SelectColor,
      size_id: SelectSize,
      quantity: Count,
    };
    await basketStore.addBasketItem(
      "Bearer " + sessionStorage.getItem("token"),
      data
    );
  };

  const sizeChoice = (e) => {
    if (e.target !== e.currentTarget) return;
    const nodeList = e.target.parentNode.parentNode.parentNode.childNodes;
    nodeList.forEach((node) => {
      node.firstChild.firstChild.classList.remove("btnSelected");
    });
    e.target.classList.toggle("btnSelected");
    setSelectSize(e.target.name);
    console.log("SelectSize", SelectSize);
  };
  const colorChoice = (e) => {
    if (e.target !== e.currentTarget) return;
    setSelectColor(e.target.name);
    console.log("SelectColor", SelectColor);
  };

  useEffect(async () => {
    const data = await shoeStore.getShoeDetail(
      "bearer " + sessionStorage.getItem("token"),
      params.id
    );
    setProductDetail(data);
    const result = new Set();
    console.log(
      data.shoesColorSizes.map((shoe) => {
        const keyList = Object.keys(shoe.sizeAndStock);
        keyList.forEach((el) => {
          result.add(el);
          // setVariableSize((prev) => prev.add(el));
        });
      })
    );
    const arr = [...result];
    arr.sort();
    setVariableSize((prev) => [...arr]);
    setSelectColor(data.shoesColors[0].color);
  }, []);

  return (
    <Info>
      <div className="ScrollFix">
        <Fixbox>
          <div style={{ margin: "0", padding: "0" }}>
            <div style={{ margin: "0", padding: "0" }}>
              <DetailName>{ProductDetail.shoesName}</DetailName>
              <DetailDesc>
                <DetailPriceUL>
                  <DetailPrice>
                    <span>
                      {convertToPricingComma(ProductDetail.shoesPrice)}
                    </span>
                    원
                  </DetailPrice>
                  <DetailPrice></DetailPrice>
                  <DetailPrice></DetailPrice>
                </DetailPriceUL>
                <DetailGender>남녀공용</DetailGender>
                <SimpleDesc>
                  <div
                    style={{
                      display: "inline-block",
                      paddingRight: "10px",
                      margin: "0",
                      padding: "0",
                    }}
                  >
                    스트리트웨어 브랜드 소울굿즈와 아이코닉 척 70 &amp; 잭퍼셀의
                    만남. 컨버스 X 소울굿즈 리미티드 콜라보레이션
                  </div>
                  <More>더보기</More>
                </SimpleDesc>
              </DetailDesc>
              <RelationTop>
                <Customoption>
                  컬러{" "}
                  <span style={{ color: "#000" }}>
                    {SelectColor}
                    {/* {ProductDetail.shoesColors &&
                      ProductDetail.shoesColors.map((shoe, idx) => (
                        <span> {shoe.color} |</span>
                      ))} */}
                  </span>
                </Customoption>
                <PrdCode>스타일 : 169906C</PrdCode>
              </RelationTop>
              <DummyBox>
                <PrdRelationDummy>
                  <DummyList>
                    <PrdListUl>
                      {ProductDetail.shoesColors &&
                        ProductDetail.shoesColors.map((shoe, idx) => (
                          <PrdListLi>
                            <img
                              style={{ width: "100%" }}
                              src={"/assets/" + shoe.imageName + "1.jpg"}
                              name={shoe.color}
                              onClick={colorChoice}
                            ></img>
                          </PrdListLi>
                        ))}
                    </PrdListUl>
                  </DummyList>
                </PrdRelationDummy>
              </DummyBox>
              <PrdBoard>
                <ul style={{ padding: "0" }}>
                  <Grid container spacing={0}>
                    {VariableSize &&
                      VariableSize.map((size, idx) => (
                        <Grid item xs={3}>
                          <TableLi>
                            <Size onClick={sizeChoice} name={size}>
                              <SizeSpan>{size}</SizeSpan>
                            </Size>
                          </TableLi>
                        </Grid>
                      ))}
                  </Grid>
                </ul>
                <Grid container spacing={0}>
                  <BaseQty>
                    <Qantity>{Count}</Qantity>
                    <QtyUpDown>
                      <RemoveIcon onClick={MinusCount}></RemoveIcon>
                    </QtyUpDown>
                    <QtyUpDown>
                      <AddIcon onClick={PlusCount}></AddIcon>
                    </QtyUpDown>
                  </BaseQty>
                </Grid>
              </PrdBoard>
              <ProdAction>
                <BuyDiv>
                  <CartBtn onClick={sendBasket}>장바구니</CartBtn>
                  <BuyBtn>바로구매</BuyBtn>
                  <LikeBtn>
                    <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                  </LikeBtn>
                </BuyDiv>
              </ProdAction>
            </div>
          </div>
        </Fixbox>
      </div>
    </Info>
  );
};

export default ProductDetail;
