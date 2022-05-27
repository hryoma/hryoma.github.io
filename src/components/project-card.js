import * as React from "react"
import styled from "styled-components"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { ExtIconLink } from "./link"

import icGitHub from "../assets/icons/icon-github.png"
import icLink from "../assets/icons/icon-link.png"


const CardWrapper = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: row nowrap;
  gap: 30px;
  
  @media (max-width: 768px) {
    max-width: 500px;
    flex-flow: column wrap;
    justify-content: center;
  }

  @media (max-width: 576px) {
    max-width: 350px;
    flex-flow: column wrap;
    justify-content: center;
  } 
`

const CardImage = styled(GatsbyImage)`
  display: block;
  height: auto;
  width: auto;
  max-height: 180px;
  max-width: 240px;
  border-radius: 5px;
  object-fit: cover;
  margin: 0 auto;
`

const CardContent = styled.div`
  min-width: 300px;
  
  @media (max-width: 768px) {
    width: auto;
    min-width: 100px;
  }
`

const ProjectTitle = styled.h4`
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
        <CardImage image={coverImageData} alt={fm.title}/>
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
