import React from "react"
import styled from "styled-components"


const CustomLink = styled.a`
  color: ${props => (props.color ? props.color : 'var(--c-text)')};
`

export const IntLink = ({link, title, color, children}) => {
  return (
    <CustomLink color={color} href={link}>
      {title}
      {children}
    </CustomLink>
  )
}

export const ExtLink = ({link, title, color, children}) => {
  return (
    <CustomLink color={color} href={link} target="_blank" rel="noreferrer noopener">
      {title}
      {children}
    </CustomLink>
  )
}

const IconImg = styled.img`
  height: 1.2rem;
  width: 1.2rem;
  transition: all ease-in-out 0.15s;
  filter: brightness(0.75);
  
  &:hover {
    filter: brightness(1);
  }
`

export const ExtIconLink = ({link, img, name}) => (
  <ExtLink link={link}>
    <IconImg src={img} alt={name}/>
  </ExtLink>
)
