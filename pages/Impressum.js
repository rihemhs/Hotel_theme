import React,{useState,useEffect} from "react";
import Layout from "../components/layout";
import InnerHeader from "../components/inner-header";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";
import { CMS_Service } from "../components/_services/CMS.service_"
import { Container } from "react-bootstrap";
import {Helmet} from "react-helmet";
import { colors } from "@material-ui/core";

const Impressum = () => {

  return (
    <Layout pageTitle="Impressum ">
   {/*metatag componement */}
   <Helmet>
      <title>Impressum</title>
      <meta name="description" content="Impressum"></meta>
      <meta name="keywords" content="Impressum"></meta>
    </Helmet>
      <InnerHeader />
      <PageHeader title="Impressum"crumbtext="Impressum" />
      <section className="imp-style-one">
      <Container>
       
          <div className="text-imp" > 
          <p> Developpé par :
            <span style={{color:"red",fontWeight:"bold"}}>Next Js</span>
          </p>  
            </div> 
         

      
        </Container>
        </section>

        <Footer />
      </Layout>
  );
};

export default Impressum;
