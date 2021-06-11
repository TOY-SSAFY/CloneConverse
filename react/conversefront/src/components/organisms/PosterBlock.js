import React from "react";
import styled from "styled-components";
import daintyPoster from "../../resources/images/chuck_taylor_allstar_dainty_poster.jpg"
import { PosterCard } from "../molecules";

const OuterBox = styled.div`
  margin-top : 50px;
`

const PosterBlock = (props) => {
  return (
    <>
      <OuterBox>
        <PosterCard
          {...props}
        />
      </OuterBox>
    </>
  );
};

export default PosterBlock;
