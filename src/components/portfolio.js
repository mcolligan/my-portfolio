/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import Project from './project';

const Portfolio = () => {
  const {
    allProject: { nodes: projects },
  } = useStaticQuery(graphql`
    query {
      allProject {
        nodes {
          technologies
          start(formatString: "MMM Do, YYYY")
          url
          slug
          name
          end(formatString: "MMM Do, YYYY")
          description
        }
      }
    }
  `);
  return (
    <Flex
      sx={{
        flexWrap: 'wrap',
      }}>
      {projects.map((project) => (
        <Project project={project} key={project.slug} />
      ))}
    </Flex>
  );
};

export default Portfolio;