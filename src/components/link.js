import React from "react"
import styled from "styled-components";


export const IntLink = ({className, link, title, children}) => {
  return (
    <a className={className}
       href={link}>
      {title}
      {children}
    </a>
  )
}

export const ExtLink = ({className, link, title, children}) => {
  return (
    <a className={className}
       rel="noreferrer noopener"
       target="_blank"
       href={link}>
      {title}
      {children}
    </a>
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
