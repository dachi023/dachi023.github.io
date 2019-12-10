import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../../templates/Layout'
import { MarkdownRemark } from '../../../types/graphql-types'

const Container = styled.div`
  margin-top: 3.3em;
`

const Body = styled.div`
  font-size: 1.2rem;
  em {
    font-style: normal;
  }
  h2 {
    font-size: 1.8rem;
    margin-top: 2.1em;
  }
  h3 {
    font-size: 1.5rem;
    margin-top: 1.5em;
  }
  img {
    margin-top: 1.5em;
    width: 100%;
  }
  p {
    margin-top: 0.9em;
  }
  ul {
    list-style: disc inside;
    margin-top: 0.9em;
  }
`

interface Props {
  data: {
    markdownRemark: MarkdownRemark
    site: {
      siteMetadata: {
        description: string
        title: string
      }
    }
  }
}

export default function PostPage(props: Props) {
  return (
    props.data.markdownRemark.frontmatter && (
      <Layout
        description={props.data.site.siteMetadata.description}
        title={props.data.markdownRemark.frontmatter.title!}
      >
        <Container>
          <article>
            <Body dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html! }} />
          </article>
        </Container>
      </Layout>
    )
  )
}

export const pageQuery = graphql`
  query PostPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      timeToRead
      fields {
        path
      }
      frontmatter {
        date
        description
        title
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`
