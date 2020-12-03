import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.p`
  font-family: 'Pacifico', cursive;
  font-size: 2.2rem;
`

const TitleLink = styled(Link)`
  color: #130f40;
  text-decoration: none;
`

const Menu = styled.ul`
  display: flex;
  justify-content: center;
`

const MenuItem = styled.li`
  margin-left: 1.4em;
  &:first-child {
    margin-left: 0;
  }
`

const MenuLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
`

export default function Header() {
  return (
    <header>
      <Content>
        <Title>
          <TitleLink to="/">dachi.work</TitleLink>
        </Title>
      </Content>
      <nav>
        <Menu>
          <MenuItem>
            <MenuLink to="/posts">Posts</MenuLink>
          </MenuItem>
          {/* <MenuItem>
            <MenuLink to="/works">Works</MenuLink>
          </MenuItem> */}
        </Menu>
      </nav>
    </header>
  )
}
