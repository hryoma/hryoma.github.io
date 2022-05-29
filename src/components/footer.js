import * as React from "react"
import styled from "styled-components"

import SmIcons from "./sm-icons";


const FooterContainer = styled.footer`
  background: var(--c-bg-elevated);
  width: 100%;
  margin-top: 120px;
  bottom: 0;
`

const FooterWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 60px;
`

const FooterText = styled.p`
  margin-bottom: 15px;
`

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <FooterText>Ryoma © {new Date().getFullYear()}</FooterText>
      <SmIcons/>
    </FooterWrapper>
  </FooterContainer>
)

export default Footer
