import * as React from "react"
import styled from "styled-components"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { ExtIconLink } from "./link"

import icGitHub from "../assets/icons/icon-github.png"
import icLink from "../assets/icons/icon-link.png"


const CardWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: row nowrap;
  gap: 5px 15px;
  justify-content: center;
  
  @media (max-width: 768px) {
    max-width: 500px;
    flex-flow: column nowrap;
  }

  @media (max-width: 576px) {
    max-width: 350px;
    flex-flow: column nowrap;
  } 
`

const CardContentLeft = styled.div`
  flex: 1;
  width: 200px;
  max-width: 200px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 100%;
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

const ProjectDate = styled.small`
  margin: 5px auto;
`

const ProjectLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
`

const CardContentRight = styled.div`
  flex: 1;
  width: 320px;
  
  @media (max-width: 768px) {
    width: auto;
    min-width: 100px;
  }
`

const ProjectTitle = styled.h3`
  margin-top: 0;
`

const ProjectDescription = styled.p`
  margin: 10px auto;
`

const ProjectTagsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 7px 7px;
`

const ProjectTag = styled.small`
  background-color: var(--c-bg-elevated);
  border-radius: 10px;
  padding: 0px 8px;
`

const ProjectCard = ({ node }) => {

  const fm = node.frontmatter
  const coverImageData = getImage(fm.cover_image)

  let showPost = false
  if (fm.visibility === "post") {
    showPost = true
  }

  return (
    <div>
      <CardWrapper>
        <CardContentLeft>
          <CardImage image={coverImageData} alt={fm.title}/>

          <ProjectDate>{fm.start_date} – {fm.end_date}</ProjectDate>

          <ProjectLinks>
            { fm.github_link &&
            <ExtIconLink link={fm.github_link} img={icGitHub} name={"github"}/>
            }
            { fm.external_link &&
            <ExtIconLink link={fm.external_link} img={icLink} name={"external link"}/>
            }
          </ProjectLinks>
        </CardContentLeft>

        <CardContentRight>
          { showPost &&
            <ProjectTitle>
              <Link to={node.fields.slug}>{fm.title}</Link>
            </ProjectTitle>
          }
          { !showPost && <ProjectTitle>{fm.title}</ProjectTitle> }

          <ProjectDescription>{fm.desc}</ProjectDescription>

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
        </CardContentRight>
      </CardWrapper>
    </div>
  )
}

export default ProjectCard
