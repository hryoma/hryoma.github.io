import * as React from "react"
import { Link } from "gatsby"
import resumePdf from "../assets/RyomaHarris.pdf"

import Header from "../components/header"
import Seo from "../components/seo"

import "../styles/index.css"

const IndexPage = () => {
  return (
    <>
      <Seo title="Home"/>
      <div className="wrapper">
        <div className="terminal-window">
          <div className="terminal-header">>_</div>
          <div className="terminal-content">
            <p className="terminal-title">
              <span className="text-green">ryoma</span>
              <span className="text-white">:</span>
              <span className="text-magenta">~</span>
              <span className="text-white">$ </span>
              echo ${'{'}<span className="typewriter-text">Ryoma_Harris</span>{'}'}
            </p>
            <div className="fade-in-up">
              <p>> Hi!</p>
              <p>> I'm a computer science major at the{' '}
                <a className="text-red">
                  University of Pennsylvania
                </a>.
              </p>
              <p>> Currently, I'm an IT intern at{' '}
                <a className="link text-cyan"
                   target="_blank"
                   rel="noopener noreferrer"
                   href="https://shopy2go.com">
                  Shopy2Go
                </a>, web developer at{' '}
                <a className="link text-blue"
                   target="_blank"
                   rel="noopener noreferrer"
                   href="https://www.prize.pennclimateventures.org">
                  Penn Climate Ventures
                </a>, and CTO/full-stack developer at{' '}
                <a className="link text-green"
                   target="_blank"
                   rel="noopener noreferrer"
                   href="http://cynfolia.com">
                  Cynfolia
                </a>.
              </p>
              <p>> You can check out my résumé{' '}
                <a className="resume-btn link text-yellow"
                   target="_blank"
                   rel="noopener noreferrer"
                   href={resumePdf}>
                here
                </a>!
              </p>
            </div>
          </div>
          <div className="header-wrapper">
            <Header/>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
