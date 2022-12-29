import React from "react";
import Layout from "../components/layout";
import InnerHeader from "../components/inner-header";
import PageHeader from "../components/page-header";
import ContactThree from "../components/contact-three";
import Footer from "../components/footer";
import ContactMap from "../components/contact-map";

const Contact = () => {
  return (
    <Layout pageTitle="Contact Page ">
      <InnerHeader />
      <PageHeader title="Contact us" crumbtext="Contact Page" />
        <ContactThree />
        <ContactMap />
        <Footer />
      </Layout>
  );
};

export default Contact;
