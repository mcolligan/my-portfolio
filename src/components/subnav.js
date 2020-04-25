/** @jsx jsx */
import { jsx, Styled, Container, Flex, Box } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Github from '../assets/github.svg'
import LinkedIn from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'
// import Medium from '../assets/medium.svg'
import StackOverflow from '../assets/stackoverflow.svg'

const icons = {
  github: Github,
  linkedin: LinkedIn,
  twitter: Twitter,
  // medium: Medium,
  stackoverflow: StackOverflow,
}

const Subnav = () => {
  const { bio: { social, greeting, title } } = useStaticQuery(graphql`
    query {
      bio {
        social {
          name
          url
        }
        title
        name
        greeting
      }
    }
  `)
  return (
    <Container
      p={3}>
      <Flex
        sx={{
          mt: 44,
          flexWrap: 'wrap'
        }}>
        <Box
          sx={{
            width: ['full', '1/2'],
            position: 'relative'
          }}>
            <span
              sx={{
                position: 'absolute',
                width: 16,
                pt: 16,
                border: 0,
                borderTop: 6,
                borderColor: theme => theme.colors.orange[3],
                borderStyle: 'solid'
              }}></span>
          <Styled.h3
           sx={{
             fontWeight: 'normal'
           }}>
             { greeting }
          </Styled.h3>
          <Styled.h6
            sx={{
              color: theme => theme.colors.gray[5]
            }}>
            { title }
          </Styled.h6>
        </Box>
        <Box
          sx={{
            width: ['full', '1/2'],
            mt: [3, 0]
          }}>
          <Flex
            sx={{
              flexDirection: 'column'
            }}>
            <Box
              sx={{
                width: 'full',
                textAlign: ['left', 'right']
              }}>
              <Styled.h6
                sx={{
                  textTransform: 'uppercase',
                  color: theme => theme.colors.gray[6],
                  fontSize: 0
                }}>
                <span sx={{ bg: theme => theme.colors.gray[3], mr: 3, width: 10, height: 1, display: 'inline-block', verticalAlign: 'middle' }}></span>
                <span sx={{ verticalAlign: 'middle' }}>Connect With Me</span>
                <span sx={{ bg: theme => theme.colors.gray[3], ml: 3, width: 10, height: 1, display: 'inline-block', verticalAlign: 'middle' }}></span>
              </Styled.h6>
            </Box>
            <Box
              sx={{
                width: 'full'
              }}>
              {
                social.length && (
                  <Flex
                    sx={{
                      listStyle: 'none',
                      p: 0,
                      justifyContent: ['flext-start', 'flex-end']
                    }}
                    as='ul'>
                    { social.map(({ name, url }) => {
                      const TagName = icons[name.toLowerCase()]
                      return (
                        <li
                          sx={{
                            mx: 1
                          }}
                          key={name}>
                          <a href={url} target="_blank" rel="noopener noreferrer">
                            <TagName sx={{
                              width: 10,
                              border: 1,
                              p: 1,
                              borderRadius: 3,
                              bg: theme => theme.colors.gray[3],
                              path: {
                                fill: theme => theme.colors.white
                              },
                              '&:hover': {
                                boxShadow: 'lg',
                                bg: theme => theme.colors.blue[3],
                                path: { fill: 'white' },
                              }
                            }} />
                          </a>
                        </li>
                      )}
                    )}
                  </Flex>
                )
              }
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  )
}

export default Subnav