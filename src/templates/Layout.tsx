import 'ress'

import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import GlobalStyle from '../GlobalStyle'
import Header from '../organisms/Header'

const Container = styled.div`
  margin: 0 auto;
  max-width: 720px;
  padding: 1.6rem 1.2rem;
`

interface Props {
  children: React.ReactNode
  description?: string
  title?: string
}

export default function Layout(props: Props) {
  console.log(props.title, props.description)
  return (
    <React.Fragment>
      <GlobalStyle />
      <Helmet
        link={[
          {
            href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP|Pacifico&display=swap',
            rel: 'stylesheet'
          }
        ]}
        meta={[{ name: 'description', content: props.description || '' }]}
        title={props.title || 'dachi.work'}
      />
      <Container>
        <Header />
        {props.children}
      </Container>
    </React.Fragment>
  )
}
