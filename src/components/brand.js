import * as React from "react";
import styled from "styled-components"
import {Link} from "gatsby";


const BrandLink = styled(Link)`
  font-weight: bold;
  display: inline;
  margin-right: 15px;
  height: max-content;
  
  &:hover {
    text-decoration: none;
    filter: drop-shadow(0 0 5px var(--c-cyan));
  }
`

const BrandText = styled.span`
  text-decoration: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all ease-in-out 0.15s;
`

const Brand = () => (
  <BrandLink to="/">
    <BrandText className="text-green">ryoma</BrandText>
    <BrandText className="text-white">:</BrandText>
    <BrandText className="text-magenta">~</BrandText>
    <BrandText className="text-white">$</BrandText>
  </BrandLink>
)

export default Brand
