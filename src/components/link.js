import React from "react"


export const Link = ({link, title}) => {

  return (
    <a rel="noreferrer noopener" href={link}>{title}</a>
  )
}
