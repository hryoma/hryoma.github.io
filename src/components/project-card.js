import * as React from "react"
import styled from "styled-components"

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

const CardImage = styled.img`
  display: block;
  height: auto;
  width: 100%;
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

const ProjectCard = ({project}) => {
  return (
    <div>
      <CardWrapper>
        <CardContentLeft>
          <CardImage src={project.image} alt={project.title}/>

          <ProjectDate>{project.startDate} – {project.endDate}</ProjectDate>

          <ProjectLinks>
            {project.links.github.map((link) => (
              <ExtIconLink key={link} link={link} img={icGitHub} name={"github"}/>
            ))}
            {project.links.website.map((link) => (
              <ExtIconLink key={link} link={link} img={icLink} name={"website"}/>
            ))}
            {project.links.misc.map((link) => (
              <ExtIconLink key={link} link={link} img={icLink} name={"miscellaneous"}/>
            ))}
          </ProjectLinks>
        </CardContentLeft>

        <CardContentRight>
          <ProjectTitle>{project.title}</ProjectTitle>

          <ProjectDescription>{project.desc}</ProjectDescription>

          <ProjectTagsContainer>
            {project.tags.field.map((tag) => (
              <ProjectTag key={tag} className="text-magenta">{tag}</ProjectTag>
            ))}
            {project.tags.framework.map((tag) => (
              <ProjectTag key={tag} className="text-yellow">{tag}</ProjectTag>
            ))}
            {project.tags.language.map((tag) => (
              <ProjectTag key={tag} className="text-green">{tag}</ProjectTag>
            ))}
            {project.tags.tech.map((tag) => (
              <ProjectTag key={tag} className="text-blue">{tag}</ProjectTag>
            ))}
          </ProjectTagsContainer>
        </CardContentRight>
      </CardWrapper>
    </div>
  )
}

export default ProjectCard
