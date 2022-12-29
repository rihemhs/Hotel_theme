import React,{useEffect,useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import OffresOne from "./cards/OffresOne";
import BlockTitle from "./block-title";
import { CMS_Service } from "../components/_services/CMS.service_"

const Offres = () => {
  const [section, setSection] = useState([]);
  //Api section service
  const gethome_service= () => {
    CMS_Service.sectionservice().then(results => {   
      setSection(results.data)
  
           })
  }
  useEffect(() => {

  gethome_service()
   
      }, [])
     
  return (
    <section className="servicesone" id="service">
      <Container>
        <BlockTitle
          textAlign="center"
          title={section?.attributes?.sectionservice?.Titel}/>
       
        <Row>
        {section?.attributes?.sectionservice?.CartElement && section?.attributes?.sectionservice?.CartElement. map((p,index) => (
          <Col lg={4} md={6} sm={12} key={index}>
             <OffresOne
             img={process.env.NEXT_PUBLIC_URL+p?.image?.data?.attributes?.url} 
             title={p.Titel} 
             text={p.Description} 
             link={p.link}
             name_for_technical_use={p.name_for_technical_use}
             />
            </Col>

))} 
         
        </Row>
      </Container>
    </section>
  );
};

export default Offres;
