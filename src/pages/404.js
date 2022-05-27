import * as React from "react"

import PageLayout, {Container} from "../components/layout"
import {ExtLink, IntLink} from "../components/link";

const NotFoundPage = () => (
  <PageLayout title="404: Not found">
    <Container>
      <h1>404: Page Not Found</h1>
      <p>
        Looking for the Equipotential Grapher? The page has been relocated
        to <ExtLink link={"https://equipotential-grapher-9bkly.ondigitalocean.app"} title="here"/>.
      </p>
      <br/>
      <p>Go back to the main page <IntLink link={"https://ryoma.dev"} title={"here"}/>.</p>
    </Container>
  </PageLayout>
)

export default NotFoundPage
