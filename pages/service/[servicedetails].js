import React,{useState,useEffect} from "react";
import { Container, Row, Col, AccordionToggle } from "react-bootstrap";
import Layout from "../../components/layout";
import InnerHeader from "../../components/inner-header";
import PageHeader from "../../components/page-header";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import { useRouter } from "next/router";
import { CMS_Service } from "../../components/_services/CMS.service_"
import {Helmet} from "react-helmet";
import moment from 'moment';

const ServiceDetails = () => {
  const router = useRouter();
  const  name  = router.query.servicedetails;
  const [service, setService] = useState({});
  const [serviceimg, setServiceimg] = useState({});
  const[comment,setComment]=useState([])
  const getServicebyName = () => {
    CMS_Service.ServiceId(name).then(results => {
    setService(results)  
   
    })
  }
  //Getserviceimage
  const getServiceimage = () => {
    CMS_Service.ServiceimageId(name).then(results => {
      setServiceimg(results)  
   
    })
  }
   //comments_service
 const getcommentId= () => {
  CMS_Service.commentId_services(name).then(results => {
    setComment(results?.data[0]?.attributes)
      })   
  }
  useEffect(() => {
    if (name != undefined)
    getServicebyName();
    getServiceimage()
    getcommentId();

  }, [name]);

  return (
    <Layout pageTitle="Service Details Page">
        {service.data && service?.data[0]?.attributes ?
       <Helmet>
       <title>{service?.data[0]?.attributes?.metatag?.title}</title>
       <meta name="description" content={service?.data[0]?.attributes?.metatag?.description}></meta>
       <meta name="keywords" content={service?.data[0]?.attributes?.metatag?.keywords}></meta>
     </Helmet>
        :null
      }
     
      <InnerHeader />  
      {service.data && service?.data[0]?.attributes ?
      <>
      <PageHeader title={service?.data[0]?.attributes?.Titel} crumbtext="Service Details" />
      <section className="blog-details-page">
        <Container>
          <Row>
            <Col lg={8}>
              {/* <ServiceContent Serv={service?.data[0]?.attributes} /> */}
              <div className="blog-one">
        <div className="imageblock">
          <div className="blockdetails">
            <img 
            src= {process.env.NEXT_PUBLIC_URL+serviceimg?.data[0]?.attributes?.image?.data[0]?.attributes?.url}
            alt={serviceimg?.data[0]?.attributes?.image?.data[0]?.attributes?.caption} />
            <div className="date-block">{moment(serviceimg?.data[0]?.attributes?.createdAt).format(" D MMMM yyyy")}</div>

          </div>
        </div>
        <div className="text-of-block">
          <div className="info">
            <a href="#"> Admin</a>
            <span className="sep">.</span>
            <a href="#">{comment?.comments?.data?.length}  Comments</a>
          </div>
          <h3 className="post-title">
          {service?.data[0]?.attributes?.Titel}
          </h3>
          <p dangerouslySetInnerHTML={{ __html:service?.data[0]?.attributes?.inhaltText}}>
          </p> 
        </div>
      </div>

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

export default ServiceDetails;
