import React from "react"
import styled from "styled-components"

import PageLayout, {Container, GridLayout} from "../components/layout"
import { ExtIconLink } from "../components/link"
import {Tag, TagsContainer} from "../components/tags";

import icGitHub from "../assets/icons/icon-github.png"
import icLink from "../assets/icons/icon-link.png"
import {projects} from "../data/projects"


const CardWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px 15px;
  justify-content: center;
  
  @media (max-width: 768px) {
    max-width: 520px;
    flex-direction: column;
  }

  @media (max-width: 576px) {
    max-width: 350px;
    flex-direction: column;
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
`

const CardImage = styled.img`
  display: block;
  height: 160px;
  width: 180px;
  border-radius: 5px;
  object-fit: cover;
  margin: 0 auto;
`

const ProjectLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
`

const CardContentRight = styled.div`
  flex: 1;
  
  @media (max-width: 768px) {
    width: auto;
    min-width: 100px;
  }
`

const ProjectTitle = styled.h3`
  margin-top: 0;
`

const ProjectDate = styled.small`
  margin: 5px auto;
`

const ProjectDescription = styled.p`
  margin: 10px auto;
`

const ProjectCard = ({project}) => {
  return (
    <div>
      <CardWrapper>
        <CardContentLeft>
          <CardImage src={project.image} alt={project.title}/>
          {/*
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
          */}
        </CardContentLeft>

        <CardContentRight>
          <ProjectTitle>{project.title}</ProjectTitle>

          <ProjectDate>{project.type} • {project.startDate} — {project.endDate}</ProjectDate>

          <ProjectDescription>{project.desc}</ProjectDescription>

          <TagsContainer>
            {project.tags.field.map((tag) => (
              <Tag key={tag} color="var(--c-magenta)">{tag}</Tag>
            ))}
            {project.tags.framework.map((tag) => (
              <Tag key={tag} color="var(--c-yellow)">{tag}</Tag>
            ))}
            {project.tags.language.map((tag) => (
              <Tag key={tag} color="var(--c-green)">{tag}</Tag>
            ))}
            {project.tags.tech.map((tag) => (
              <Tag key={tag} color="var(--c-blue)">{tag}</Tag>
            ))}
          </TagsContainer>
        </CardContentRight>
      </CardWrapper>
    </div>
  )
}


const ProjectsPage = () => {
  return (
    <PageLayout title="Projects">
      <Container wide>
        <h1>Projects</h1>
      </Container>

      <Container superwide>
        <GridLayout childWidth={650}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </GridLayout>
      </Container>
    </PageLayout>
  )
}

export default ProjectsPage
