import React from 'react';
import Banner from './Banner';
import AboutCompany from './AboutCompany';
import ServicesCompany from './ServicesCompany';
import GalleryPreview from './GalleryPreview';
import WorkWithUsCTA from './WorkWithUsCTA';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutCompany></AboutCompany>
      <ServicesCompany></ServicesCompany>
      <GalleryPreview></GalleryPreview>
      <WorkWithUsCTA></WorkWithUsCTA>
    </div>
  );
};

export default Home;