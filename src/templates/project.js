/** @jsx jsx */
import { jsx, Container, Flex, Box, Styled } from 'theme-ui'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data: { project = {} } }) => {
  const { name, start, end, description, technologies, image, url } = project
  return (
    <Layout>
      <Container
        p={3}>
        <Flex>
          <Box
            sx={{
              width: 'full',
              py: 5
            }}>
            <Flex
              sx={{
                flexDirection: 'column'
              }}>
              <Box>
                <Flex
                  sx={{
                    flexWrap: 'wrap'
                  }}>
                  <Box
                    sx={{
                      width: ['full', '1/2'],
                      mb: [5, 0]
                    }}>
                    <Box
                      sx={{
                        position: 'relative'
                      }}>
                      <div
                        sx={{
                          position: 'absolute',
                          boxShadow: 'xl',
                          top: -15,
                          left: [-15, -40],
                          borderRadius: 'full',
                          bg: theme => theme.colors.orange[4],
                          width: 100,
                          height: 100
                        }}
                      />
                      <div
                        sx={{
                          position: 'relative',
                          zIndex: 99,
                          display: 'inline-block',
                        }}>
                        <Styled.h1
                          sx={{
                            position: 'relative',
                            textShadow: '-3px 3px lightblue',
                            mb: 0,
                            color: 'primary',
                            zIndex: 99
                          }}>
                          { name }
                        </Styled.h1>
                        <Styled.h6
                          sx={{
                            pl: 5,
                            color: theme => theme.colors.gray[4],
                            fontWeight: 'medium'
                          }}>
                          { start } - { end }
                        </Styled.h6>
                      </div>
                    </Box>
                    <Box
                      sx={{
                        my: 4
                      }}>
                      <p>{ description }</p>
                    </Box>
                    <Flex
                      sx={{
                        flexWrap: 'wrap'
                      }}>
                      { technologies.map((tech, i) => (
                        <div
                          key={i}
                          sx={{
                            fontSize: '0.75rem',
                            border: 0,
                            borderLeft: 3,
                            borderStyle: 'solid',
                            borderColor: theme => theme.colors.blue[4],
                            px: 3,
                            py: 1,
                            mr: 3,
                            bg: theme => theme.colors.gray[2]
                          }}>{ tech }</div>
                      ))}
                    </Flex>
                    <Box
                      sx={{
                        mt: [5, 6]
                      }}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          variant: 'buttons.simple',
                          display: 'inline-block',
                          textDecoration: 'none',
                          fontSize: 2,
                          py: 3,
                          boxShadow: 'lg',
                          bg: theme => theme.colors.orange[5],
                          '&:hover': {
                            bg: theme => theme.colors.orange[6]
                          }
                        }}>
                        <span>Visit Project</span>
                        <svg sx={{ verticalAlign: 'middle', ml: 2, position: 'relative', top: '-1px' }} fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40"><g><path d="m28.4 11.6c4.6 0 8.2 3.8 8.2 8.4s-3.6 8.4-8.2 8.4h-6.8v-3.2h6.8c2.8 0 5.1-2.4 5.1-5.2s-2.3-5.2-5.1-5.2h-6.8v-3.2h6.8z m-15 10v-3.2h13.2v3.2h-13.2z m-6.9-1.6c0 2.8 2.3 5.2 5.1 5.2h6.8v3.2h-6.8c-4.6 0-8.2-3.8-8.2-8.4s3.6-8.4 8.2-8.4h6.8v3.2h-6.8c-2.8 0-5.1 2.4-5.1 5.2z"></path></g></svg>
                      </a>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      ml: [0, '16.6666%'],
                      width: ['full', '1/3']
                    }}>
                    { image && (
                      <img
                        sx={{
                          borderRadius: 5,
                          boxShadow: '2xl',
                          width: ['full']
                        }}
                        src={image.publicURL}
                        alt={ name }
                        />
                    )}
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($projectID: String!) {
    project(id: { eq: $projectID }) {
      name
      description
      technologies
      url
      id
      image {
        publicURL
      }
      start(formatString: "MMM Do YYYY")
      end(formatString: "MMM Do YYYY")
    }
  }
`