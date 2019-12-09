import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Title = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 2.2rem;
`

const TitleLink = styled(Link)`
  color: #130f40;
  text-decoration: none;
`

const Menu = styled.ul`
  display: flex;
`

const MenuItem = styled.li`
  margin-left: 0.9em;
  &:first-child {
    margin: 0;
  }
`

const MenuLink = styled(Link)`
  color: #130f40;
  text-decoration: none;
`

export default function Header() {
  return (
    <header>
      <Container>
        <Title>
          <TitleLink to="/">dachi.work</TitleLink>
        </Title>
        <nav>
          <Menu>
            <MenuItem>
              <MenuLink to="/">About</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/posts">Posts</MenuLink>
            </MenuItem>
          </Menu>
        </nav>
      </Container>
    </header>
  )
}
