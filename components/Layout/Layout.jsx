import Head from 'next/head';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title} - Ruben Fabio</title>
        <meta property="og:site_name" content={title + ' - Ruben Fabio'} />
        <meta property="og:title" content={title + ' - Ruben Fabio'} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/899357550384926783/908410226401771550/foto.jpeg"
        />
        <meta name="description" content={description} />
        <meta property="og:locale" content="pt_BR" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
