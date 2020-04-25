/** @jsx jsx */
import { jsx, Styled, Container, Flex, Box } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import Github from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';
import Twitter from '../assets/twitter.svg';
import StackOverflow from '../assets/stackoverflow.svg';

const icons = {
  github: Github,
  linkedin: LinkedIn,
  twitter: Twitter,
  stackoverflow: StackOverflow,
};

const Footer = (props) => {
  const {
    site: {
      siteMetadata: { title },
    },
    bio: { social },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      bio {
        social {
          name
          url
        }
      }
    }
  `);
  return (
    <footer {...props}>
      <Container p={3}>
        <Flex
          sx={{
            flexWrap: 'wrap',
            alignItems: 'center',
            textAlign: ['center', 'initial'],
          }}>
          <Box
            sx={{
              width: ['full', '1/2'],
              mb: [3, 0],
            }}>
            <Styled.h6
              sx={{
                my: 0,
                fontWeight: 'light',
                fontSize: 0,
              }}>
              Copyright &copy; {new Date().getFullYear()} {title}
            </Styled.h6>
          </Box>
          <Box
            sx={{
              width: ['full', '1/2'],
            }}>
            {social.length && (
              <Flex
                sx={{
                  listStyle: 'none',
                  p: 0,
                  justifyContent: ['center', 'flex-end'],
                }}
                as='ul'>
                {social.map(({ name, url }) => {
                  const TagName = icons[name.toLowerCase()];
                  return (
                    <li
                      sx={{
                        mx: 1,
                      }}
                      key={name}>
                      <a
                        sx={{ display: 'block' }}
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <TagName
                          sx={{
                            width: 10,
                            border: 1,
                            p: 1,
                            borderRadius: 3,
                            bg: 'rgba(0,0,0,0.3)',
                            path: {
                              fill: (theme) => theme.colors.white,
                            },
                            '&:hover': {
                              boxShadow: 'lg',
                              bg: (theme) => theme.colors.orange[4],
                              path: { fill: 'white' },
                            },
                          }}
                        />
                      </a>
                    </li>
                  );
                })}
              </Flex>
            )}
          </Box>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;