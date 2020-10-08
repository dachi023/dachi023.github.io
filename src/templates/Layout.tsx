import 'ress'

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import GlobalStyle from '../GlobalStyle'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

const Container = styled.div`
  margin: 0 auto;
  max-width: 720px;
  padding: 1.6rem 1.2rem 0;
`

interface Props {
  children: React.ReactNode
  description?: string
  title?: string
}

export default function Layout(props: Props) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Helmet
        link={[
          {
            href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP|Pacifico&display=swap',
            rel: 'stylesheet',
          },
        ]}
        meta={[{ name: 'description', content: props.description || '' }]}
        title={props.title || 'dachi.work'}
      />
      <Container>
        <Header />
        {props.children}
        <Footer />
      </Container>
    </React.Fragment>
  )
}
