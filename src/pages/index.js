import * as React from "react"
import resumePdf from "../assets/Resume.pdf"

import Seo from "../components/seo"
import {ExtLink} from "../components/extLink";
import Navbar from "../components/navbar"
import Brand from "../components/brand";
import SmIcons from "../components/sm-icons";

import "../styles/index.css"

const AboutMe = () => {
  return (
    <div className="about-me">
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
        and my portfolio{' '}
        <ExtLink className="text-blue" link={"portfolio"} title={"here"}/>!
      </p>
      <p>Feel free to reach out to me at: ryomah [at] seas.upenn.edu</p>
    </div>
  )
}

const IndexPage = () => {
  return (
    <main>
      <Seo title="Home"/>
      <div className="terminal-window">
        <div className="terminal-header">>_</div>
        <div className="terminal-content">
          <p><Brand/>echo ${'{'}<span className="typewriter-text">About_Me</span>{'}'}</p>
          <AboutMe/>
        </div>
        <div className="header-wrapper">
          <Navbar/>
          <SmIcons/>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
