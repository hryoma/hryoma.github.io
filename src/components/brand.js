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
  color: ${props => (props.color ? props.color : 'var(--c-text)')};
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
    <BrandText color="var(--c-green)">ryoma</BrandText>
    <BrandText color="var(--c-white)">:</BrandText>
    <BrandText color="var(--c-magenta)">~</BrandText>
    <BrandText color="var(--c-white)">$</BrandText>
  </BrandLink>
)

export default Brand
