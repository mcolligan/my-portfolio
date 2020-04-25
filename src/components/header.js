/** @jsx jsx */
import { jsx, Styled, Container, Flex, Box } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Header = (props) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header {...props}>
      <Container p={3}>
        <Flex
          sx={{
            flexWrap: 'wrap',
          }}>
          <Box
            sx={{
              width: ['full', '1/2'],
            }}>
            <AnchorLink
              sx={{
                textDecoration: 'none',
                color: 'primary',
              }}
              to='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                width='32'
                height='32'
                fill='currentcolor'>
                <circle
                  r={14}
                  cx={16}
                  cy={16}
                  fill='none'
                  stroke='currentcolor'
                  strokeWidth={4}
                />
                <circle
                  r={6}
                  cx={16}
                  cy={16}
                  fill='lightblue'
                  stroke='lightblue'
                  strokeWidth={0}
                />
              </svg>
              <Styled.h2
                sx={{
                  display: 'inline-block',
                  fontWeight: 'extrabold',
                  my: 0,
                  mx: 2,
                  verticalAlign: 'bottom',
                }}>
                {siteMetadata.title}
              </Styled.h2>
            </AnchorLink>
          </Box>
          <Box
            sx={{
              width: ['full', '1/2'],
            }}>
            <Flex
              as='ul'
              sx={{
                width: 'full',
                listStyle: 'none',
                justifyContent: ['flex-start', 'flex-end'],
                p: 0,
                m: 0,
              }}>
              <li sx={{ p: 2 }}>
                <AnchorLink
                  sx={{
                    color: 'primary',
                    textTransform: 'uppercase',
                    fontSize: 0,
                    fontWeight: 'extrabold',
                    textDecoration: 'none',
                  }}
                  to='/#about'
                  replace>
                  About
                </AnchorLink>
              </li>
              <li sx={{ p: 2 }}>
                <AnchorLink
                  sx={{
                    color: 'primary',
                    textTransform: 'uppercase',
                    fontSize: 0,
                    fontWeight: 'extrabold',
                    textDecoration: 'none',
                  }}
                  to='/#skills'
                  replace>
                  Skills
                </AnchorLink>
              </li>
              <li sx={{ p: 2 }}>
                <AnchorLink
                  sx={{
                    color: 'primary',
                    textTransform: 'uppercase',
                    fontSize: 0,
                    fontWeight: 'extrabold',
                    textDecoration: 'none',
                  }}
                  to='/#portfolio'
                  replace>
                  Portfolio
                </AnchorLink>
              </li>
              <li sx={{ p: 2 }}>
                <AnchorLink
                  sx={{
                    color: 'primary',
                    textTransform: 'uppercase',
                    fontSize: 0,
                    fontWeight: 'extrabold',
                    textDecoration: 'none',
                  }}
                  to='/#contact'
                  replace>
                  Contact
                </AnchorLink>
              </li>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;