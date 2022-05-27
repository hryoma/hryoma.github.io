import * as React from "react"
import styled from "styled-components"

import Seo from "../components/seo"
import {ExtLink, IntLink} from "../components/link";
import Navbar from "../components/navbar"
import Brand from "../components/brand";
import SmIcons from "../components/sm-icons";

import resumePdf from "../assets/Resume.pdf"


const AboutMeWrapper = styled.div`
  margin-top: 2rem;
  opacity: 0;
  transform: translateY(1rem);
  animation: fadeInUp 2s ease 2s forwards;

  & > p{
    margin-top: 1.25rem;
  }
  
  & > p:before {
    content: ">";
    margin-right: 0.5em;
  }

  & > li {
    list-style-type: none;
  }
  & > li:before {
    content: ">";
    margin-right: 0.5em;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

`

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <p>Hi! I'm Ryoma</p>
      <p>I study computer science at the University of Pennsylvania</p>
      <p>Currently, I'm...</p>
      <ul className="about-experiences">
        <li>a web developer at{' '}
          <ExtLink className={"text-blue"}
                link={"https://pennclimateventures.org"}
                title={"Penn Climate Ventures"}/>
        </li>
        <li>a co-founding CTO/full-stack developer at{' '}
          <ExtLink className={"text-green"} link={"http://cynfolia.com"} title={"Cynfolia"}/>
        </li>
        <li>practicing cybersecurity on picoCTF</li>
      </ul>
      <p>This past summer, I was an IT intern at{' '}
          <ExtLink className={"text-cyan"} link={"https://shopy2go.com"} title={"Shopy2Go"}/>
      </p>
      <p>You can check out my résumé{' '}
        <ExtLink className="text-yellow" link={resumePdf} title={"here"}/>{' '}
        and my projects{' '}
        <IntLink className="text-blue" link={"projects"} title={"here"}/>!
      </p>
      <p>Feel free to reach out to me at: ryomah [at] seas.upenn.edu</p>
    </AboutMeWrapper>
  )
}

const TerminalWindow = styled.div`
  font-family: var(--font-monospace);
  max-width: 800px;
  max-height: 400px;
  border: 3px solid var(--c-bg-elevated);
  border-radius: 15px;
  background-color: var(--c-bg);
  padding: 60px 0 120px 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  overflow: hidden;
`

const TerminalHeader = styled.div`
  font-size: 2rem;
  font-family: Menlo, Monaco, "Lucida Console", "Courier New", Courier, monospace;
  text-align: center;
  font-weight: bold;
  background: var(--c-bg-elevated);
  width: 100%;
  padding: 10px 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

const TerminalContent = styled.div`
  padding: 30px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`

const TypeWriterText = styled.span`
  color: var(--c-yellow);
  position: relative;
  width: max-content;
  --typewriter-speed: 1s;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  /* hides text to right of the blinking cursor */
  &::before {
    background: var(--c-bg);
    animation: typewriter var(--typewriter-speed) steps(12) 0.5s forwards;
  }

  /* blinking cursor */
  &::after {
    width: .125em;
    background: transparent;
    animation: typewriter var(--typewriter-speed) steps(12) 0.5s forwards,
               typeblink 750ms steps(6) 3;
  }
  
  @keyframes typewriter {
    to {
      left: 100%
    }
  }

  @keyframes typeblink {
    to {
      background-color: var(--c-cursor);
    }
  }
`

const HeaderWrapper = styled.div`
  /* Override header.css styles */
  display: inline-block;
  justify-content: space-between;

  & #navbar {
    position: absolute !important;
    top: auto !important;
    bottom: 0;
  }

`

const SmIconWrapper = styled.div`
  position: absolute;
  margin-right: 30px;
  right: 0;
  z-index: 100;

  @media screen and (max-width: 360px) {
    visibility: hidden;
    opacity: 0;
  }
`

const IndexPage = () => {
  return (
    <main>
      <Seo title="Home"/>
      <TerminalWindow>
        <TerminalHeader>>_</TerminalHeader>
        <TerminalContent>
          <p><Brand/>echo ${'{'}<TypeWriterText>About_Me</TypeWriterText>{'}'}</p>
          <AboutMe/>
        </TerminalContent>
        <HeaderWrapper>
          <Navbar/>
          <SmIconWrapper>
            <SmIcons/>
          </SmIconWrapper>
        </HeaderWrapper>
      </TerminalWindow>
    </main>
  )
}

export default IndexPage
