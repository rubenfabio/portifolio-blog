import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import HeroSection2 from '../components/Hero/HeroSection2';
import Layout from '../components/Layout/Layout';

function index() {
  return (
    <>
      <Layout title="Home" description="Esta é a home">
        <HeroSection></HeroSection>
        <HeroSection2></HeroSection2>
      </Layout>
    </>
  );
}

export default index;
