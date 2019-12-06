import React from 'react'
import { FaGithub, FaSpeakerDeck, FaTwitter } from 'react-icons/fa'
import Image, { FluidObject } from 'gatsby-image'
import styled from 'styled-components'

import Emoji from '../atoms/Emoji'
import Heading from '../atoms/Heading'

const Pic = styled.div`
  width: 100%;
`

const Bio = styled.div`
  width: auto;
`

const List = styled.ul`
  margin: 0.3em 0 0em;
`

const ListItem = styled.li`
  font-size: 1.2rem;
`

const Icon = styled.a`
  margin-left: 0.9em;
  &:first-child {
    margin: 0;
  }
`

export default function Profile({ image }: { image: FluidObject }) {
  return (
    <React.Fragment>
      <Pic>
        <Image fluid={image} />
      </Pic>
      <Bio>
        <Heading>About me</Heading>
        <List>
          <ListItem>
            <Emoji symbol="📛" /> dachi023
          </ListItem>
          <ListItem>
            <Emoji symbol="📍" /> Tokyo, Japan
          </ListItem>
          <ListItem>
            <Emoji symbol="👨‍💻" /> Front-end web developer
          </ListItem>
          <ListItem>
            <Emoji symbol="🏢" />{' '}
            <a href="https://connehito.com" rel="noopener noreferrer" target="_blank">
              Connehito
            </a>
          </ListItem>
        </List>

        <Heading>Products</Heading>
        <List>
          <ListItem>
            <a href="https://dachi.work/docbase-js/">docbase-js</a>
          </ListItem>
          <ListItem>
            <a href="https://github.com/Connehito/eslint-config-connehito">eslint-config-connehito</a>
          </ListItem>
        </List>

        <Heading>Links</Heading>
        <List>
          <ListItem>
            <Icon href="https://github.com/dachi023" rel="noopener" target="_blank">
              <FaGithub size="1.5rem" />
            </Icon>
            <Icon href="https://twitter.com/dachi_023" rel="noopener" target="_blank">
              <FaTwitter size="1.5rem" />
            </Icon>
            <Icon href="https://speakerdeck.com/dachi023" rel="noopener" target="_blank">
              <FaSpeakerDeck size="1.5rem" />
            </Icon>
          </ListItem>
        </List>
      </Bio>
    </React.Fragment>
  )
}
