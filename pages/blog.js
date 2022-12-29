import React ,{useEffect,useState}from "react";
import Layout from "../components/layout";
import InnerHeader from "../components/inner-header";
import PageHeader from "../components/page-header";
import BlogPage from "../components/blog-page";
import Footer from "../components/footer";
import { CMS_Service } from "../components/_services/CMS.service_"
import {Helmet} from "react-helmet";

const Blog = () => {
const [tag, setTag] = useState([]);
const gethome_metablog = () => {
CMS_Service. blog().then(results => {
    setTag(results.data)
  })
 
}
useEffect(() => {
gethome_metablog()
   
  }, [])
  return (
    <Layout pageTitle="Blog Page ">
      <InnerHeader />   
      <PageHeader title="Services Hotel" crumbtext="Service Page" />
        {tag?.map(
            (p, index) => (          
              <Helmet key={index}>
        <title>{p?.attributes?.metatag?.title}</title>
      <meta name="description" content={p?.attributes?.metatag?.description}></meta>
      <meta name="keywords" content={p?.attributes?.metatag?.description}></meta>
    </Helmet>   
            )
          )}

      <BlogPage />
      <Footer />
    </Layout>
  );
};

export default Blog;
