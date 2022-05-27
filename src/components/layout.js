import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Seo from "./seo";
import Navbar from "./navbar"
import "../styles/base.css"
import Footer from "./footer";


export const Container = styled.div`
  background-color: ${props => (props.color ? props.color : `none`)};
  padding: 2rem 1rem;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  
  @media (min-width: 576px) {
    max-width: 540px;
  }
  
  @media (min-width: 768px) {
    padding: 2rem 3rem;
    max-width: 720px;
  }
  
  @media (min-width: 992px) {
    max-width: 960px;
  }
  
   ${props => (props.wide || props.superwide
    ? `
      @media (min-width: 1250px) {
        max-width: 1200px;
      }
      
      @media (min-width: 1500px) {
        max-width: 1440px;
      }`
    : ``
  )} 

  ${props => (props.superwide
    ? `
      @media (min-width: 1750px) {
        max-width: 1700px;
      }
      
      @media (min-width: 2000px) {
        max-width: 1950px;
      }`
    : ``
  )}
`

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => (props.childWidth
  ? props.childWidth : 300)}px, max-content));
  grid-gap: 45px;
  justify-content: center;
  padding: initial;
`

const MainWrapper = styled.main`
  padding-top: 120px;
  min-height: 50vh;
`

const PageLayout = ({title, children}) => {
  return (
    <>
      <Seo title={title}/>
      <Navbar/>
      <MainWrapper>{children}</MainWrapper>
      <Footer/>
    </>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
