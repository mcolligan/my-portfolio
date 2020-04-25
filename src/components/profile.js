/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
const Profile = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { glob: "profile*" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);
  const profile = allFile.edges.find(
    ({ node: { name } }) => name === 'profile',
  );
  const profileAlt = allFile.edges.find(
    ({ node: { name } }) => name === 'profile-alt',
  );

  const [publicURL, setPublicURL] = useState(profile.node.publicURL);

  return (
    <div
      sx={{
        bg: (theme) => theme.colors.blue[2],
        boxShadow: '2xl',
        borderRadius: 'lg',
        mb: '50px',
      }}>
      <img
        sx={{
          top: ['15px', '30px'],
          right: ['-15px', '-35px'],
          boxShadow: 'lg',
          borderRadius: 'lg',
          position: 'relative',
          maxWidth: 'full',
        }}
        onMouseEnter={() => {
          setPublicURL(profileAlt.node.publicURL);
        }}
        onMouseLeave={() => {
          setPublicURL(profile.node.publicURL);
        }}
        src={publicURL}
        alt='Profile'
      />
    </div>
  );
};

export default Profile;