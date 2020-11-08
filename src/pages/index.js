import React from "react";
import { Link, graphql } from "gatsby";
import styled from 'styled-components';

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

const Button = styled.button `
  width: 8rem;
  background-color: #98ca3f;
  border: none;
  border-radius: 10px;
  color: ${props => props.color};
  &:hover{
    transform: scale(1.2)
  }
`

const IndexPage = ({data}) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}/>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button color='gray'>Comprar</Button>
    <Link to="/gracias/">Go to gracias</Link><br />
    <Link to="/cancelacion/">Go to cancelacion</Link>
  </>
)

export default IndexPage;
