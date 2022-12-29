import React,{useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Bloghotel from "./cards/bloghotel";
import BlockTitle from "./block-title";
import { CMS_Service } from "./_services/CMS.service_"
const HomeHotel = () => {
  const [blog, setBlog] = useState([]);
  //Api blohhome
  const gethome_blog = () => {
    CMS_Service.blog().then(results => {
      setBlog(results.data.reverse())  
    })
  
  } 
  useEffect(() => {
    gethome_blog()
  }, [])
  return (
    <section className="blog-style-one" id="blog">
      <Container>
        <BlockTitle
          textAlign="center"
          title={`Rooms & Suites`} />
      
        <Row>
          {blog.slice(0,3).map((p,index) => (        
              <Col key={index} lg={4}>     
                <Bloghotel
                  image={process.env.NEXT_PUBLIC_URL+p?.attributes?.image?.data?.attributes?.url}
                    author={p.attributes.author}
                    date={p.attributes.date}
                    comments={p.attributes.comments}
                     title={p.attributes.title}
                     text={p.attributes.text}
                     path={p.attributes.path}
                     title_for_technical_use={p.attributes.title_for_technical_use}
                />
              </Col>
            )
          )}
    
        </Row>
         <Row className="justify-content-md-center">
          <Col lg={4} >
                <a href="/blog" className="btn-blog" style={{textAlign:"center"}}>
                To our services
                </a>
          </Col>
          </Row>
      </Container>
    </section>
  );
};

export default HomeHotel;
