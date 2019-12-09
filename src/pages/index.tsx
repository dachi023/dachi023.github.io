import React from 'react'
import { graphql } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../templates/Layout'
import Profile from '../organisms/Profile'

const Illust = styled.div`
  width: 100%;
`

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
      <Illust>
        <Image fluid={props.data.file.childImageSharp.fluid} />
      </Illust>
      <Profile />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPage {
    file(relativePath: { eq: "welcome.png" }) {
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
