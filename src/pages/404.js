import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/base.css"
import {Link} from "../components/link";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container">
      <h1>404: Page Not Found</h1>
      <p>
        Looking for the Equipotential Grapher? The page has been relocated
        to <Link link={"https://equipotential-grapher-9bkly.ondigitalocean.app"} title="here"/>.
      </p>
      <br/>
      <p>Go back to the main page <Link link={"https://ryoma.dev"} title={"here"}/>.

      </p>
    </div>
  </Layout>
)

export default NotFoundPage
