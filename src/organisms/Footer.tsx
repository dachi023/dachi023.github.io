import React from 'react'
import { FaGithub, FaSpeakerDeck, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 3em 0 1em;
`

const LinkListItem = styled.li`
  margin-top: 0.4em;
  &:first-child {
    margin-top: 0;
  }
`

const Link = styled.a`
  align-items: center;
  display: flex;
  text-decoration: none;
`

const LinkText = styled.span`
  font-size: 1rem;
  margin-left: 0.8em;
`

const SpecialThanks = styled.p`
  color: #777;
  font-size: 1rem;
  margin-top: 4em;
  text-align: center;
`

const Copyright = styled.p`
  color: #777;
  font-size: 0.8rem;
  margin-top: 0.6em;
  text-align: center;
`

export default function Footer() {
  return (
    <footer>
      <Content>
        <ul>
          <LinkListItem>
            <Link href="https://github.com/dachi023" rel="noopener" target="_blank">
              <FaGithub size="1rem" />
              <LinkText>GitHub</LinkText>
            </Link>
          </LinkListItem>
          <LinkListItem>
            <Link href="https://twitter.com/dachi_023" rel="noopener" target="_blank">
              <FaTwitter size="1rem" />
              <LinkText>Twitter</LinkText>
            </Link>
          </LinkListItem>
          <LinkListItem>
            <Link href="https://speakerdeck.com/dachi023" rel="noopener" target="_blank">
              <FaSpeakerDeck size="1rem" />
              <LinkText>Speaker Deck</LinkText>
            </Link>
          </LinkListItem>
        </ul>
        <SpecialThanks>
          Illust by <a href="https://icons8.com/">icons8</a>
        </SpecialThanks>
        <Copyright>&copy; 2019 Ryo Adachi</Copyright>
      </Content>
    </footer>
  )
}
