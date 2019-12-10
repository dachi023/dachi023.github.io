import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { MarkdownRemarkEdge } from '../../types/graphql-types'

const List = styled.ul`
  padding: 0.6em 0;
`

const ListItem = styled.li`
  border-bottom: 1px solid #ddd;
  margin-top: 1.8em;
  padding-bottom: 1.8em;
  &:first-child {
    margin: 0;
  }
`

const Meta = styled.p`
  color: #666;
  font-size: 0.9rem;
`

const Title = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 0.6em;
`

const Description = styled.div`
  font-size: 1.2rem;
  margin-top: 0.3em;
`

interface Props {
  posts: MarkdownRemarkEdge[]
}

export default function PostList({ posts }: Props) {
  return (
    <React.Fragment>
      <List>
        {posts.map(
          ({ node }, index) =>
            node.fields &&
            node.frontmatter && (
              <ListItem key={index}>
                <Meta>
                  {dayjs(node.frontmatter.date).format('MMM DD, YYYY')} - {node.timeToRead} min read
                </Meta>
                <Title to={node.fields.path!}>{node.frontmatter.title}</Title>
                <Description>{node.frontmatter.description}</Description>
              </ListItem>
            )
        )}
      </List>
    </React.Fragment>
  )
}
