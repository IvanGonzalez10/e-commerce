import React from "react"
import SEO from "../components/seo"
import { Button, Purchase } from '../styles/components';
import {Link} from 'gatsby';
export default function gracias() {
  return (
  <div>
    <SEO title='Compra exitosa' />
    <Purchase>
      <h2>Compra exitosa</h2>
      <p>La mejor compra que puedes hacer, gracias</p>
      <span role='img' aria-label='emoji'>❤</span>
      <Link to='/'>
        <Button>Volver al catálogo</Button>
      </Link>
    </Purchase>
  </div>
  )
}
