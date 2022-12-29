import React, { useState,useEffect } from "react";
import { CMS_Service } from "./_services/CMS.service_"
import { useRouter } from "next/router";
import moment from 'moment';

const Comment = () => {
  const[filtercomment,setFiltercomment]=useState([])
  const router = useRouter();
  const name = router.query.blogdetails;
 //comments
 const getcommentId= () => {
  CMS_Service.commentId(name).then(results => {  
  setFiltercomment(results)
 })   
  }
  useEffect(() => {
  if (name != undefined)
    getcommentId()
 
  }, [name]); 
  return (
    <div className="comment-block">
    <div className="title-line">
      {filtercomment.data && filtercomment?.data[0]?.attributes?
      <h3>{filtercomment?.data[0]?.attributes?.comments?.data.length} Comments</h3>     
        :null
      }
        
    </div>
    {filtercomment.data && filtercomment?.data[0]?.attributes ?
    <>
{filtercomment?.data[0]?.attributes?.comments?.data.map((p,index) => (   
            <div key={index} className="single-comment-one">
            <div className="imageblock">
              <div className="blockdetails">
            <img 
                src={process.env.NEXT_PUBLIC_URL+p?.attributes?.Image?.data?.attributes?.url} 
                alt={p?.attributes?.Image?.data?.attributes?.caption} />
              </div>
            </div>
            <div className="text-of-block">
              <div className="top-block">
                <div className="left-block">
                  <h3>{p?.attributes?.username}</h3>
                  <span className="date-line">
  
                    {moment(p?.attributes?.createdAt).format("D MMMM yyyy")}
                    <span className="sep">.</span>
                    {moment(p?.attributes?.createdAt).format("LTS")} 
                  </span>
                </div>
                <div className="right-block">
                  <a href="/" className="reply-btn">
                    Reply
                  </a>
                </div>
              </div>
              <p dangerouslySetInnerHTML={{ __html: p?.attributes?.comments_text }}>

              </p>
            </div>
          </div>              
            )
          )}
    
          </>:null

        }

  </div>
  );
};

export default Comment;
