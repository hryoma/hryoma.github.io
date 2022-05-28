import React from "react"

import PageLayout, {Container, GridLayout} from "../components/layout"
import ProjectCard from "../components/project-card"

import {projects} from "../data/projects"


const ProjectsPage = () => {
  return (
    <PageLayout title="Projects">
      <Container wide>
        <h1>Projects</h1>
      </Container>

      <Container superwide>
        <GridLayout childWidth={535}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </GridLayout>
      </Container>
    </PageLayout>
  )
}

export default ProjectsPage
