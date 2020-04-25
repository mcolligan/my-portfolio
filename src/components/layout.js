/* eslint-disable no-unused-vars */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>Myles Colligan</title>
      <link rel='icon' href={'/images/favicon.ico'} />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href={'/images/favicon-16x16.png'}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href={'/images/favicon-32x32.png'}
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href={'/images/apple-touch-icon.png'}
      />
    </Helmet>
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // set this to `minHeight: '100vh'` for full viewport height
        minHeight: '100vh',
      }}>
      <Header
        sx={{
          borderBottom: 4,
          borderColor: 'light',
          borderStyle: 'solid',
          width: '100%',
        }}
      />
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}>
        {children}
      </main>
      <Footer
        sx={{
          bg: 'primary',
          color: 'white',
          width: '100%',
        }}
      />
    </div>
  </>
);
export default Layout;