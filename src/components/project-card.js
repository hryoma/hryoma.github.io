import * as React from "react"
import { Link } from "gatsby"

import "../styles/project-card.css"

import githubIcon from "../assets/icons/icon-github.png"
import linkIcon from "../assets/icons/icon-link.png"

const ProjectCard = ({ image, title, role, startDate, endDate, desc, githubLink,
                       externalLink, tags, visibility, slug }) => {

  var showPost = false
  console.log(visibility)
  if (visibility === "post") {
    showPost = true
  }

  return (
    <div className="card">
      <div className="image">Image</div>
      <div className="content">
        { showPost &&
          <Link to={slug}><h2 className="title">{title}</h2></Link>
        }
        { !showPost &&
          <h2 className="title">{title}</h2>
        }
        <small className="data">{role}  <b>·</b>  {startDate} - {endDate}</small>
        <p className="desc">{desc}</p>
        <div className="links">
          { githubLink &&
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img className="icon" src={githubIcon} />
            </a>
          }
          { externalLink &&
            <a href={externalLink} target="_blank" rel="noopener noreferrer">
              <img className="icon" src={linkIcon} />
            </a>
          }
        </div>
        <div className="tags">
          {tags.map( ( tag ) => (
            <span className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
