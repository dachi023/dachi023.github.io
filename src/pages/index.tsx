import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Profile from '../organisms/Profile'
import Layout from '../templates/Layout'

const Content = styled.div`
  margin-top: 1.4em;
`

interface Props {
  data: {
    site: {
      siteMetadata: {
        description: string
        title: string
      }
    }
  }
}

export default function IndexPage(props: Props) {
  return (
    <Layout description={props.data.site.siteMetadata.description} title={props.data.site.siteMetadata.title}>
      <Content>
        <Profile />
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
