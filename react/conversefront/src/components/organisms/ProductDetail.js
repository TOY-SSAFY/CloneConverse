import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import bigimg from "../../resources/images/bigImg.jpg"
import "../../styles/Detail/ProductDetail.scss";

const Info = styled.div`
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-flex: 0;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 35%;
    max-width: 35%;
    position: absolute;
    width: 400px;
    height: 100%;
    top: 0;
    right: 10%;
    text-align: left;
    margin: 0;
    padding: 0;
`
// const InfoArea = styled.div`
// position: fixed;
// top: 130px;
// bottom: auto;
// height: 909px;
// width: 100%;
// overflow: auto;
// overflow-x: hidden;
// padding: 0;
// transition: all 0.3s;
// `

// const InfoAreaScroll = styled.div`
// pposition: absolute;
// top: auto;
// bottom: 0px;
// height: auto;
// width: 100%;
// overflow: auto;
// overflow-x: hidden;
// padding: 0;
// `
const Fixbox = styled.div`
max-width: 400px;
clear: both;
padding: 30px 0 30px 0;
`

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
`

const DetailDesc = styled.div`
margin: 0;
padding-bottom: 24px;
border-bottom: 1px solid #e5e5e5;
`

const DetailPriceUL = styled.ul`
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
`

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
`

const DetailGender = styled.div`
    margin-top: 14px;
    font-size: 14px;
    color: #757575;
    font-weight: 800;
    line-height: 20px;
`

const SimpleDesc = styled.div`
margin-top: 14px;
    font-size: 16px;
    color: #000;
    line-height: 22px;
    clear: both;
`
const More = styled.a`
font-size: 14px;
    color: #757575;
    text-decoration: underline;
    display: inline-block;
`

const RelationTop = styled.div`
padding: 15px 0 0;
    line-height: 1.3;
    position: relative;
    z-index: 5;
`

const DummyBox = styled.div`
    position: relative;
`

const PrdBoard = styled.div`
    margin: 0;
    padding: 0;
`

const ProdAction = styled.div`
margin: 24px 0 0 0;
position: relative;
padding: 0;
`

const Customoption = styled.div`
float: left;
font-size: 14px;
color: #757575;
`

const PrdCode = styled.div`
float: right;
font-size: 12px;
color: #757575;
`

const PrdRelationDummy = styled.div`
position: relative;
padding-bottom: 30px;
border-bottom: 1px solid #e5e5e5;
z-index: 2;
background-color: #fff;
`

const DummyList = styled.div`
width:100%;
margin: 0;
padding: 0;
`

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
`

const PrdListLi = styled.li`
width: 19%;
    margin: 15px 1% 0 0;
    position: relative;
    display: inline-block;
    color: #757575;
    vertical-align: top;
`
const prdTable = styled.table`
    table-layout: fixed;
    border: 0 none;
    border-spacing: 0;
    border-collapse: collapse;
`

const TableLi = styled.li`
position: relative;
width: 100%;
max-width: 20%;
overflow: hidden;
display: inline-block;
margin: 0 -1px -1px 0;
vertical-align: top;
border: 1px solid #e5e5e5;
border-radius: 0;
background: #fff;
padding: 0;
`

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
`

const SizeSpan = styled.span`
cursor: pointer;
display: inline-block;
padding: 0;
box-sizing: border-box;
word-break: break-all;
margin: 0;
`

const BaseQty = styled.div`
margin-top: 30px;
padding: 0;
`

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
`
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
`
const BuyDiv = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 0;
    padding: 0;
`

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
`

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
`

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
`


const ProductDetail = () => {
    const [ScrollY, setScrollY] = useState(0);
    const [DivStatus, setDivStatus] = useState(false);
    const handleFollow = () => {
        setScrollY(window.pageYOffset);
        if(ScrollY > 1780) setDivStatus(true);
        else setDivStatus(false);
    }
    useEffect(() => {
        console.log("ScrollY ", ScrollY);
    }, [ScrollY])

    useEffect(() => {
        const watch = () => {
        window.addEventListener('scroll', handleFollow);
        }
        watch();
        return() => {
            window.removeEventListener('scroll', handleFollow);
        }
    })


  return (
    <Info>
      <div
        className={DivStatus ? "ScrollAbs" : "ScrollFix"}
      >
        <Fixbox>
           <div style = {{margin: "0", padding: "0"}}>
                <div style = {{margin: "0", padding: "0"}}>
                    <DetailName>
                        컨버스 X 소울굿즈 척 70
                    </DetailName>
                    <DetailDesc>
                        <DetailPriceUL>
                            <DetailPrice><span>119,000</span>원</DetailPrice>
                            <DetailPrice></DetailPrice>
                            <DetailPrice></DetailPrice>
                        </DetailPriceUL>
                        <DetailGender>남녀공용</DetailGender>
                        <SimpleDesc>
                            <div style={{
                                display: "inline-block",
                                paddingRight: "10px",
                                margin: "0",
                                padding: "0"    
                            }}>스트리트웨어 브랜드 소울굿즈와 아이코닉 척 70 &amp; 잭퍼셀의 만남. 컨버스 X 소울굿즈 리미티드 콜라보레이션
                            </div>
                            <More>더보기</More>
                        </SimpleDesc>
                    </DetailDesc>
                    <RelationTop>
                        <Customoption>컬러 <span style={{color: "#000"}}>바이브런트오렌지</span></Customoption>
                        <PrdCode>스타일 : 169906C</PrdCode>
                    </RelationTop>
                    <DummyBox>
                        <PrdRelationDummy>
                            <DummyList>
                                <PrdListUl>
                                    <PrdListLi><img style={{width: "100%"}} src={bigimg}></img></PrdListLi>
                                    <PrdListLi><img style={{width: "100%"}} src={bigimg}></img></PrdListLi>
                                </PrdListUl>
                            </DummyList>
                        </PrdRelationDummy>
                    </DummyBox>
                    <PrdBoard>
                        <prdTable>
                            <tbody>
                                <tr >
                                    <td>
                                        <ul style={{padding: "0"}}>
                                            <TableLi><Size><SizeSpan>230</SizeSpan></Size></TableLi>
                                            <TableLi><Size><SizeSpan>235</SizeSpan></Size></TableLi>
                                            <TableLi><Size><SizeSpan>240</SizeSpan></Size></TableLi>
                                            <TableLi><Size><SizeSpan>245</SizeSpan></Size></TableLi>
                                            <TableLi><Size><SizeSpan>250</SizeSpan></Size></TableLi>
                                            <TableLi><Size><SizeSpan>255</SizeSpan></Size></TableLi>
                                            <TableLi><Size><SizeSpan>260</SizeSpan></Size></TableLi>
                                            <TableLi><Size><SizeSpan>265</SizeSpan></Size></TableLi>
                                            <TableLi><Size><SizeSpan>270</SizeSpan></Size></TableLi>
                                            <TableLi><Size><SizeSpan>275</SizeSpan></Size></TableLi>
                                            <TableLi><Size><SizeSpan>280</SizeSpan></Size></TableLi>
                                            <TableLi><Size><SizeSpan>285</SizeSpan></Size></TableLi>
                                            <TableLi><Size><SizeSpan>290</SizeSpan></Size></TableLi>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <BaseQty>
                                            <Qantity>1</Qantity>
                                            <QtyUpDown><RemoveIcon></RemoveIcon></QtyUpDown>
                                            <QtyUpDown><AddIcon></AddIcon></QtyUpDown>
                                        </BaseQty>
                                    </td>
                                </tr>
                            </tbody>
                        </prdTable>
                    </PrdBoard>
                    <ProdAction>
                            <BuyDiv>
                                <CartBtn>장바구니</CartBtn>
                                <BuyBtn>바로구매</BuyBtn>
                                <LikeBtn><FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon></LikeBtn>
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


