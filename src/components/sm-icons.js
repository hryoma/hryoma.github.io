import * as React from "react"
import styled from "styled-components"

import {ExtIconLink} from "./link";

import icGitHub from "../assets/icons/icon-github.png";
import icLinkedIn from "../assets/icons/icon-linkedin.png";


const SmIconsWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`

const SmIcons = () => (
  <SmIconsWrapper>
    <ExtIconLink link="https://github.com/hryoma" img={icGitHub} name="github"/>
    <ExtIconLink link="https://www.linkedin.com/in/ryomah/" img={icLinkedIn} name="linkedin"/>
  </SmIconsWrapper>
)

export default SmIcons
