import React from "react"


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
