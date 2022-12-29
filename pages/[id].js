import React, { useState, useEffect } from "react";
import { CMS_Service } from "../components/_services/CMS.service_"
import { useRouter } from "next/router";
import BlogCard from "../components/cards/bloghotel";
import { Container, Row, Col } from "react-bootstrap";
import PostPagination from "../components/post-pagination";
import InnerHeader from "../components/inner-header";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";
const BLOG = () => {
  const [allblog, setAllblog] = useState([]);
    //Api Customers
    const getallbloc= () => {
      CMS_Service.blog().then(results => {
        setAllblog(results.data)    
        })      
    }
    const router = useRouter();
    const  name = router.query.name;
    useEffect(() => {
      if ( name != undefined)
      getallbloc() 
        }, [name])
        const filter = allblog.filter((element) => {
          return element?.attributes?.category_blog?.data?.attributes?.TitelCategory===name ;
         
        });
    
  console.log(filter)

  return (
    <Layout pageTitle="Blog Categories Page">
   
       <InnerHeader />
       <PageHeader title={name}crumbtext="Category" />     
    <section className="blog-style-one blog-page" id="blog">
     
    <Container>
      <Row>       
        {filter.map(
          (p, index) => (
            <Col key={`bloghotel-${index}`} lg={4} md={6} sm={12}>             
               <BlogCard
               comments= {p.attributes.comments}
               image={process.env.NEXT_PUBLIC_URL+p?.attributes?.image?.data?.attributes?.url}
               author={p.attributes.author}
               date={p.attributes.date}
                title={p.attributes.title}
                text={p.attributes.text}
                path={p.attributes.path}
                title_for_technical_use={p.attributes.title_for_technical_use} /> 

            </Col>

          )
        )}
      </Row>
      <PostPagination />
    </Container>
  </section>
 </Layout> 
  
    

  );
};

export default BLOG;
