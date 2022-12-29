import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header_";
import BannerOne from "../components/banner-one";
import Statistique from "../components/statistique";
import Offres from "../components/offres";
import Infohotel from "../components/Infohotel";
import Testimonials from "../components/testimonials";
import HomeHotel  from "../components/homehotel";
import Footer from "../components/footer";

const Home = () => {
  return (
    <Layout pageTitle="Hotel React">     
      <HeaderOne />              
      <BannerOne /> 
      <Statistique /> 
       <Offres /> 
       <Infohotel />
      <Testimonials />    
      <HomeHotel />
      <Footer />
    
    </Layout>
  );
};

export default Home;
