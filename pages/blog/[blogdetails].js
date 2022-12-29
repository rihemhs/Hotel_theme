import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/layout";
import InnerHeader from "../../components/inner-header";
import PageHeader from "../../components/page-header";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import { CMS_Service } from "../../components/_services/CMS.service_"
import {Helmet} from "react-helmet";
import moment from 'moment';
import Comment from "../../components/comment";
const BlogDetails = () => {
  const router = useRouter();
  const name = router.query.blogdetails;
  const [blog, setBlog] = useState({});
  const [blogimg, setBlogimg] = useState({});
  const[comment,setComment]=useState([])
  //comments 
  const getblogByname = () => {
    CMS_Service.blogId(name).then(results => {
    setBlog(results) 
  
    })
  }
  const getblogByimg = () => {
    CMS_Service.blogimgId(name).then(results => {
    setBlogimg(results)  
    
    })
  }
  //comments
 const getcommentId= () => {
  CMS_Service.commentId(name).then(results => {
    setComment(results?.data[0]?.attributes)
      })   
  }

  useEffect(() => {
    if ( name != undefined)
      getblogByname();
      getblogByimg();
      getcommentId()
  
   }, [name]);


  return (
    <Layout pageTitle="Blog Details Page">
    {blog?.data && blog?.data[0]?.attributes ?
       <Helmet>
       <title>{blog?.data[0]?.attributes?.metatag?.title}</title>
       <meta name="description" content={blog?.data[0]?.attributes?.metatag?.description}></meta>
       <meta name="keywords" content={blog?.data[0]?.attributes?.metatag?.keywords}></meta>
     </Helmet>
        :null       
      }

      <InnerHeader />
      {blog?.data && blog?.data[0]?.attributes?
      <>
      
      <PageHeader title={blog?.data[0]?.attributes?.title} crumbtext="Blog Details" />
      <section className="blog-details-page">     
        <Container>
          <Row>
            <Col lg={8}>
              {/*content blog */}
            <div className="blog-one">
            <div className="imageblock">
            <div className="blockdetails">
            {blogimg?.data && blogimg?.data[0]?.attributes ?        
            <img 
            src={process.env.NEXT_PUBLIC_URL+blogimg?.data[0]?.attributes.image?.data?.attributes?.url}
             alt={blogimg?.data[0]?.attributes.image?.data?.attributes?.caption} />   

            :null}
            <div className="date-block">{moment(blog?.data[0]?.attributes?.createdAt).format("D MMMM yyyy")}</div>       
          </div>
        </div>
              
        <div className="text-of-block">
          <div className="info">
            <a href="#">Admin</a>
            <span className="sep">.</span>
            <a href="#">{comment?.comments?.data?.length} comments</a>
          </div>
         
          <h3 className="post-title">
            {blog?.data[0]?.attributes?.title}
          </h3>
          <p>
           {blog?.data[0]?.attributes?.text}
          </p>
         
        </div>
      </div>
  <Comment></Comment>


            </Col>

            <Col lg={4}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </section>
     
      </> :null
      }
     <Footer /> 
    </Layout>
  );
};

export default BlogDetails;
