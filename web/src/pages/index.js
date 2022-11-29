import React from 'react';
import CryptoCoins from '../components/homePage/CryptoCoins';
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
import HeroSection from '../components/homePage/HeroSection';
import TopCategories from '../components/homePage/TopCategories';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO />
    <HeroSection />
    <div className="container">
      <CryptoCoins />
    </div>
    <div className="container">
      <FeaturedBlogs />
      <TopCategories />
    </div>
  </>
);

export default IndexPage;
