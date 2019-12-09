import React from 'react'
import { FaGithub, FaSpeakerDeck, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

import Emoji from '../atoms/Emoji'
import Heading from '../atoms/Heading'

const Biography = styled.div`
  width: auto;
`

const List = styled.ul`
  margin-top: 0.3em;
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

export default function Profile() {
  return (
    <Biography>
      <Heading>About me</Heading>
      <List>
        <ListItem>
          <Emoji symbol="📛" /> Ryo Adachi
        </ListItem>
        <ListItem>
          <Emoji symbol="📍" /> Tokyo, Japan
        </ListItem>
        <ListItem>
          <Emoji symbol="👨‍💻" /> FE developer
        </ListItem>
        <ListItem>
          <Emoji symbol="🏢" /> Connehito Inc.
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
    </Biography>
  )
}
