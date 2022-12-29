import React,{useEffect,useState} from "react";
import { CMS_Service } from "./_services/CMS.service_"
import Link from "next/link";

const Sidebar = () => {
  
  const [lastposts, setLastposts] = useState([]);
  const [categorie, setCategorie] = useState([])
   //Api AGB
   const getSidebar = () => {
    CMS_Service.blog().then(results => {
      setLastposts(results.data)
     
      })
   
  }


  useEffect(() => {
    getSidebar() 


  }, [])
 
  
  return (
    <div className="sidebar">
      <div className="single-sidebar post-widget">
        <div className="widget-title">
          <h3>Latest Posts</h3>
           </div>
        <div className="widget-post-wrapper">
        {lastposts.slice(0,3).map((p,index) => (   
          <div key={index} className="widget-single-post" >
          <div className="imageblock">
            <div className="blockdetails">
              <img 
              src={process.env.NEXT_PUBLIC_URL+p?.attributes?.image?.data?.attributes?.url}
             className="banner-mock"
              alt={p?.attributes?.image?.data?.attributes?.caption} /> 
 
            </div>
          </div>
          <div className="text-of-block">
            <h3>
         <a href={`/blog/${p.attributes.title_for_technical_use}`}>{p.attributes.title}</a> 
            </h3> 
          </div>
        </div>                 
            )
          )}
 
        </div>
      </div>
     
    </div>
  );
};

export default Sidebar;
