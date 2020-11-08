import React from "react"
import SEO from "../components/seo"
import { Button, Purchase } from '../styles/components';
import {Link} from 'gatsby';
export default function cancelacion() {
  return (
  <div>
    <SEO title='Compra no exitosa' />
    <Purchase>
      <h2>Compra no exitosa</h2>
      <p>Te esperamos para que vuelvas a intentar tener tu compra exitosa</p>
      <span role='img' aria-label='emoji'>❌</span>
      <Link to='/'>
        <Button>Volver al catálogo</Button>
      </Link>
    </Purchase>
  </div>
  )
}
