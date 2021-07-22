import * as React from "react"
import { ExtLink } from "./extLink"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "../styles/project-card.css"

import githubIcon from "../assets/icons/icon-github.png"
import linkIcon from "../assets/icons/icon-link.png"

const ProjectCard = ({ node }) => {

  const fm = node.frontmatter
  const coverImageData = getImage(fm.cover_image)

  var showPost = false
  console.log(fm.visibility)
  if (fm.visibility === "post") {
    showPost = true
  }

  return (
    <div className="card">
      <div className="image">
        <GatsbyImage image={coverImageData} alt={fm.title}/>
      </div>
      <div className="content">
        { showPost &&
          <h2 className="title">
            <Link to={node.fields.slug}>{fm.title}</Link>
          </h2>
        }
        { !showPost && <h2 className="title">{fm.title}</h2> }

        <small className="data">{fm.role}</small>
        <br/>
        <small className="data">{fm.start_date} – {fm.end_date}</small>

        <p className="desc">{fm.desc}</p>

        <div className="links">
          { fm.github_link &&
            <ExtLink link={fm.github_link}>
              <img className="icon" src={githubIcon} alt={"github"}/>
            </ExtLink>
          }
          { fm.external_link &&
            <ExtLink link={fm.external_link}>
              <img className="icon" src={linkIcon} alt={"external link"}/>
            </ExtLink>
          }
        </div>

        <div className="tags">
          {fm.tags_type && fm.tags_type.map( ( tag ) => (
            <span className="tag text-magenta">{tag}</span>
          ))}
          {fm.tags_framework && fm.tags_framework.map( ( tag ) => (
            <span className="tag text-yellow">{tag}</span>
          ))}
          {fm.tags_language && fm.tags_language.map( ( tag ) => (
            <span className="tag text-green">{tag}</span>
          ))}
          {fm.tags_tech && fm.tags_tech.map( ( tag ) => (
            <span className="tag text-blue">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
