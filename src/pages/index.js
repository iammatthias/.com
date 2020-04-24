/** @jsx jsx */

import React from 'react' //eslint-disable-line
import { jsx, Styled, Grid, Link as ExternalLink } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Img from 'gatsby-image'

import { Tooltip } from 'react-tippy'

const ContentGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: 6fr 3fr;
    grid-template-rows: 1fr;
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2em auto;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    margin: 0 auto;
  }
`

const Posts = ({ data, pageContext, location }) => {
  const photography = data.allContentfulPhotography.edges
  const posts = data.allContentfulPost.edges

  return (
    <Layout location={location.pathname}>
      <Container>
        <ContentGrid>
          <div>
            <Styled.h2 sx={{ margin: '1em 0' }}>Photography</Styled.h2>
            <List>
              {photography.map(({ node: photoSet }) => (
                <Link
                  key={photoSet.id}
                  to={`/photography/${photoSet.slug}/`}
                  sx={{ color: 'text', textDecoration: 'none' }}
                >
                  <Tooltip
                    // options
                    position="bottom"
                    followCursor="true"
                    html={
                      <div style={{ width: '200px' }}>
                        <Img
                          fluid={{
                            ...photoSet.heroImage.thumbnail,
                            aspectRatio: 4 / 3,
                          }}
                        />
                      </div>
                    }
                  >
                    <Styled.h4>{photoSet.title}</Styled.h4>
                    <Styled.p>Updated: {photoSet.updatedAt}</Styled.p>
                  </Tooltip>
                </Link>
              ))}
              <Link
                to={`/photography/`}
                sx={{
                  color: 'text',
                  textDecoration: 'none',
                  py: [2, 3],
                }}
              >
                <Styled.p>View more...</Styled.p>
              </Link>
            </List>
          </div>
          <div>
            <Styled.h2 sx={{ margin: '1em 0' }}>Recent Posts</Styled.h2>
            <List>
              {posts.map(({ node: post }) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}/`}
                  sx={{ color: 'text', textDecoration: 'none' }}
                >
                  <Tooltip
                    // options
                    position="bottom"
                    followCursor="true"
                    html={
                      <div style={{ width: '200px' }}>
                        <Img
                          fluid={{
                            ...post.heroImage.thumbnail,
                            aspectRatio: 4 / 3,
                          }}
                        />
                      </div>
                    }
                  >
                    <Styled.h4>{post.title}</Styled.h4>
                    <Styled.p>
                      Published: {post.publishDate} &nbsp;/&nbsp;/&nbsp;
                      {post.body.childMarkdownRemark.timeToRead} minute read
                    </Styled.p>
                  </Tooltip>
                </Link>
              ))}
              <Link
                to={`/blog/`}
                sx={{
                  color: 'text',
                  textDecoration: 'none',

                  py: [2, 3],
                }}
              >
                <Styled.p>View more...</Styled.p>
              </Link>
            </List>
          </div>
        </ContentGrid>
      </Container>
      <Container>
        <div>
          <Styled.h2 sx={{ margin: '1em 0' }}>Etcetera</Styled.h2>

          <Grid gap={3} columns={[1, 2, 4]}>
            <Link
              to={`/etc/time/`}
              sx={{
                color: 'text',
                textDecoration: 'none',
                border: '1px solid',
                bordercolor: 'inherit',
                padding: [2, 3],
              }}
            >
              <Styled.h4>Time</Styled.h4>
              <Styled.p sx={{ m: 0 }}>
                A real time local clock with a dynamic background gradient.
              </Styled.p>
            </Link>
          </Grid>
          <Styled.h3 sx={{ margin: '1em 0' }}>Generative</Styled.h3>
          <Styled.p sx={{ width: ['100%', '61.8%', '61.8%', '38.2%'], mb: 4 }}>
            Generative art is a fascinating intersection of code and art. The
            results are unpredicatble, and no two pieces will be the same. I've
            been working through some{' '}
            <ExternalLink src="https://generativeartistry.com/tutorials/">
              tutorials
            </ExternalLink>{' '}
            on the web recently, and my ever-evolving attempts are linked below.
            These will continue to evolve and develop as I explore more of the
            field.
          </Styled.p>
          <Grid gap={3} columns={[1, 2, 4]}>
            <Link
              to={`/etc/circlePacking/`}
              sx={{
                color: 'text',
                textDecoration: 'none',
                border: '1px solid',
                bordercolor: 'inherit',
                padding: [2, 3],
              }}
            >
              <Styled.h4>Circle Packing</Styled.h4>
              <Styled.p sx={{ m: 0 }}>Circles in tight spaces</Styled.p>
            </Link>
            <Link
              to={`/etc/cubicDisaray/`}
              sx={{
                color: 'text',
                textDecoration: 'none',
                border: '1px solid',
                bordercolor: 'inherit',
                padding: [2, 3],
              }}
            >
              <Styled.h4>Cubic Disaray</Styled.h4>
              <Styled.p sx={{ m: 0 }}>Inspired by Georg Nees</Styled.p>
            </Link>
            <Link
              to={`/etc/hypnoticSquares/`}
              sx={{
                color: 'text',
                textDecoration: 'none',
                border: '1px solid',
                bordercolor: 'inherit',
                padding: [2, 3],
              }}
            >
              <Styled.h4>Hypnotic Squares</Styled.h4>
              <Styled.p sx={{ m: 0 }}>Inspired by William Kolomyjec</Styled.p>
            </Link>
            <Link
              to={`/etc/joyDivision/`}
              sx={{
                color: 'text',
                textDecoration: 'none',
                border: '1px solid',
                bordercolor: 'inherit',
                padding: [2, 3],
              }}
            >
              <Styled.h4>Joy Division</Styled.h4>
              <Styled.p sx={{ m: 0 }}>Unknown Pleasures</Styled.p>
            </Link>

            <Link
              to={`/etc/mondrian/`}
              sx={{
                color: 'text',
                textDecoration: 'none',
                border: '1px solid',
                bordercolor: 'inherit',
                padding: [2, 3],
              }}
            >
              <Styled.h4>Mondrian</Styled.h4>
              <Styled.p sx={{ m: 0 }}>Inspired by Piet Mondrian</Styled.p>
            </Link>
            <Link
              to={`/etc/tiledLines/`}
              sx={{
                color: 'text',
                textDecoration: 'none',
                border: '1px solid',
                bordercolor: 'inherit',
                padding: [2, 3],
              }}
            >
              <Styled.h4>Tiled Lines</Styled.h4>
              <Styled.p sx={{ m: 0 }}>Simple Beauty</Styled.p>
            </Link>
            <Link
              to={`/etc/triangularMesh/`}
              sx={{
                color: 'text',
                textDecoration: 'none',
                border: '1px solid',
                bordercolor: 'inherit',
                padding: [2, 3],
              }}
            >
              <Styled.h4>Triangular Mesh</Styled.h4>
              <Styled.p sx={{ m: 0 }}>A simple mesh layer</Styled.p>
            </Link>
            <Link
              to={`/etc/unDeuxTrois/`}
              sx={{
                color: 'text',
                textDecoration: 'none',
                border: '1px solid',
                bordercolor: 'inherit',
                padding: [2, 3],
              }}
            >
              <Styled.h4>Un Deux Trois</Styled.h4>
              <Styled.p sx={{ m: 0 }}>Inspired by Vera Molnár</Styled.p>
            </Link>
          </Grid>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPost(sort: { fields: [publishDate], order: DESC }, limit: 4) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            thumbnail: fluid(maxWidth: 200, quality: 50) {
              ...GatsbyContentfulFluid_withWebp
              src
              aspectRatio
            }
          }
          body {
            childMarkdownRemark {
              timeToRead
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
    allContentfulPhotography(
      sort: { fields: [updatedAt], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          updatedAt(formatString: "MMMM DD, YYYY")
          heroImage {
            thumbnail: fluid(maxWidth: 200, quality: 50) {
              ...GatsbyContentfulFluid_withWebp
              src
              aspectRatio
            }
          }
        }
      }
    }
  }
`

export default Posts
