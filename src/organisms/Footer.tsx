import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 3em 0 1em;
`

const Text = styled.p`
  color: #666;
  font-size: 0.9rem;
`

export default function Footer() {
  return (
    <footer>
      <Container>
        <Text>&copy; 2019 dachi023</Text>
        <Text>
          Illust by <a href="https://icons8.com/">icons8</a>
        </Text>
      </Container>
    </footer>
  )
}
