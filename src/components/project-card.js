import * as React from "react"
import styled from "styled-components"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import {ExtIconLink, ExtLink} from "./link"

import icGitHub from "../assets/icons/icon-github.png"
import icLink from "../assets/icons/icon-link.png"


const CardWrapper = styled.div`
  max-width: 360px;
  border-radius: 8px;
  box-shadow: 0 2px 15px 5px var(--c-shadow-light);
  background-color: var(--c-bg);
  margin: 0 auto;
  padding: 15px 15px 30px;
  transition: all ease-in-out 0.15s;
`

const CardImage = styled.div`
  width: 100%;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
`

const CardContent = styled.div`
`

const ProjectTitle = styled.h4`
  margin-top: 15px;
  margin-bottom: 5px;
`

const ProjectRole = styled.small`
  color: var(--c-text-mute);
  margin-top: 5px;
`

const ProjectDate = styled.small`
  color: var(--c-text-mute);
  margin-top: 5px;
`

const ProjectDescription = styled.p`
  margin-top: 15px;
`

const ProjectLinks = styled.div`
  margin-top: 15px;
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
`

const ProjectTagsContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
`

const ProjectTag = styled.div`
  font-size: 0.85rem;
  background-color: var(--c-bg-elevated);
  border-radius: 10px;
  padding: 1px 8px;
`

const ProjectCard = ({ node }) => {

  const fm = node.frontmatter
  const coverImageData = getImage(fm.cover_image)

  let showPost = false
  console.log(fm.visibility)
  if (fm.visibility === "post") {
    showPost = true
  }

  return (
    <div>
      <CardWrapper>
        <CardImage>
          <GatsbyImage image={coverImageData} alt={fm.title}/>
        </CardImage>
        <CardContent>
          { showPost &&
            <ProjectTitle>
              <Link to={node.fields.slug}>{fm.title}</Link>
            </ProjectTitle>
          }
          { !showPost && <ProjectTitle>{fm.title}</ProjectTitle> }

          <ProjectRole>{fm.role}</ProjectRole>
          <b>ᆞ</b>
          <ProjectDate>{fm.start_date} – {fm.end_date}</ProjectDate>

          <ProjectDescription>{fm.desc}</ProjectDescription>

          <ProjectLinks>
            { fm.github_link &&
              <ExtIconLink link={fm.github_link} img={icGitHub} name={"github"}/>
            }
            { fm.external_link &&
              <ExtIconLink link={fm.external_link} img={icLink} name={"external link"}/>
            }
          </ProjectLinks>

          <ProjectTagsContainer>
            {fm.tags_type && fm.tags_type.map( ( tag ) => (
              <ProjectTag className="text-magenta">{tag}</ProjectTag>
            ))}
            {fm.tags_framework && fm.tags_framework.map( ( tag ) => (
              <ProjectTag className="text-yellow">{tag}</ProjectTag>
            ))}
            {fm.tags_language && fm.tags_language.map( ( tag ) => (
              <ProjectTag className="text-green">{tag}</ProjectTag>
            ))}
            {fm.tags_tech && fm.tags_tech.map( ( tag ) => (
              <ProjectTag className="text-blue">{tag}</ProjectTag>
            ))}
          </ProjectTagsContainer>
        </CardContent>
      </CardWrapper>
    </div>
  )
}

export default ProjectCard
