import React from "react";
import { Link, graphql } from "gatsby";

import Jumbo from "../components/jumbo";
import Image from "../components/image";
import SEO from "../components/seo";

export const query = graphql `
query GET_DESCRPTION{
  allSite{
    edges{
      node{
        siteMetadata{
          description
        }
      }
    }
  }
}
`

const IndexPage = ({data}) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
    <Link to="/gracias/">Go to gracias</Link><br />
    <Link to="/cancelacion/">Go to cancelacion</Link>
  </>
)

export default IndexPage;
