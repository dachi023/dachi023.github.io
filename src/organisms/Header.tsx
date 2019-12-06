import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const TitleLink = styled(Link)`
  color: #130f40;
  font-family: 'Pacifico', cursive;
  font-size: 2.2rem;
  text-decoration: none;
`

export default function Header() {
  return (
    <header>
      <h1>
        <TitleLink to="/">dachi.work</TitleLink>
      </h1>
    </header>
  )
}
