import React from "react";

const BlogContent = ({blog}) => {

  return (
    <>
      <div className="blog-one">
        <div className="imageblock">
          <div className="blockdetails">
        
            <img 
            src={process.env.NEXT_PUBLIC_URL+blog?.image}
             alt={blog?.image?.caption} />   
            <div className="date-of-block">20 juin 2022</div>
          </div>
        </div>
        <div className="text-of-block">
          <div className="info">
            <a href="#">Admin</a>
            <span className="sep">.</span>
            <a href="#">2 comments</a>
          </div>
          <h3 className="post-title">
            {blog?.title}
          </h3>
          <p>
           {blog?.text}
          </p>
         
        </div>
      </div>
    
    </>
  );
};

export default BlogContent;
