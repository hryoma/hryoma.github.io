import * as React from "react"
import resumePdf from "../assets/Resume.pdf"

import Seo from "../components/seo"
import {ExtLink} from "../components/extLink";
import Header from "../components/header"
import Brand from "../components/brand";
import SmIcons from "../components/sm-icons";

import "../styles/index.css"

const IndexPage = () => {
  return (
    <>
      <Seo title="Home"/>
      <div className="terminal-window">
        <div className="terminal-header">>_</div>
        <div className="terminal-content">
          <p><Brand/>echo ${'{'}<span className="typewriter-text">About_Me</span>{'}'}</p>
          <div className="about-me">
            <p>Hi, I'm Ryoma.</p>
            <p>I study computer science at the University of Pennsylvania.</p>
            <p>Currently, I'm...</p>
            <ul className="about-experiences">
              <li>an IT intern at{' '}
                <ExtLink className={"text-cyan"} link={"https://shopy2go.com"} title={"Shopy2Go"}/>
              </li>
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
            <p>You can check out my résumé{' '}
              <ExtLink className="text-yellow" link={resumePdf} title={"here"}/>{' '}
              and my portfolio{' '}
              <ExtLink className="text-blue" link={"portfolio"} title={"here"}/>!
            </p>
          </div>
        </div>
        <div className="header-wrapper">
          <Header/>
          <SmIcons/>
        </div>
      </div>
    </>
  )
}

export default IndexPage
