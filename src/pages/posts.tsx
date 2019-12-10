import React from 'react'
import styled from 'styled-components'
import Image, { FluidObject } from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../templates/Layout'
import PostList from '../organisms/PostList'
import { MarkdownRemarkConnection } from '../../types/graphql-types'

const Illust = styled.div`
  width: 100%;
`

interface Props {
  data: {
    allMarkdownRemark: MarkdownRemarkConnection
    file: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    site: {
      siteMetadata: {
        description: string
        title: string
      }
    }
  }
}

export default function PostsPage(props: Props) {
  return (
    <Layout description={props.data.site.siteMetadata.description} title={props.data.site.siteMetadata.title}>
      <Illust>
        <Image fluid={props.data.file.childImageSharp.fluid} />
      </Illust>
      <PostList posts={props.data.allMarkdownRemark.edges} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostsPageQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          rawMarkdownBody
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
      }
    }
    file(relativePath: { eq: "post-list.png" }) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
