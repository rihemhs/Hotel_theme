import React,{useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostPagination from "../components/post-pagination";
import BlogCard from "./cards/bloghotel";
import { CMS_Service } from "./_services/CMS.service_"
const BlogPage = () => {
  const [allblog, setAllblog] = useState([]);
  //Api Customers
  const getallbloc= () => {
    CMS_Service.blog().then(results => {
      setAllblog(results.data.reverse())
  
      })   
  }
  useEffect(() => {
  getallbloc() 
  }, [])
  return (
    <section className="blog-style-one blog-page" id="blog">
      <Container>
        <Row>       
          {allblog.reverse().map(
            (p, index) => (
              <Col key={index} lg={4} md={6} sm={12}>             
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
  );
};

export default BlogPage;
