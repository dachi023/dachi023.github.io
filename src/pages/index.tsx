import React from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import Layout from '../templates/Layout'
import Profile from '../organisms/Profile'

interface Props {
  data: {
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

export default function IndexPage(props: Props) {
  return (
    <Layout description={props.data.site.siteMetadata.description} title={props.data.site.siteMetadata.title}>
      <Profile image={props.data.file.childImageSharp.fluid} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPage {
    file(relativePath: { eq: "programming.png" }) {
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
