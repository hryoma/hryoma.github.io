import * as React from "react"

import iconEmail from "../assets/icons/icon-email.png";
import iconGithub from "../assets/icons/icon-github.png";
import iconLinkedIn from "../assets/icons/icon-linkedin.png";
import {ExtLink} from "./extLink";

import "../styles/sm-icons.css"

const SmIcons = () => (
  <div className="sm-icons">
    <ExtLink link="https://github.com/hryoma">
      <img className="sm-icon" src={iconGithub} alt="github"/>
    </ExtLink>
    <ExtLink link="https://www.linkedin.com/in/ryomah/">
      <img className="sm-icon" src={iconLinkedIn} alt="linkedin"/>
    </ExtLink>
  </div>
)

export default SmIcons
