import React from "react";

const BlogContent = ({blog}) => {
  return (
    <>
      <div className="blog-one">
        <div className="imageblock">
          <div className="blockdetails">
            <img src={blog?.image} 
            alt={blog?.image?.caption} />
            <div className="date-block">30 April, 2019</div>
       
          </div>
        </div>
        <div className="text-of-block">
          <div className="info">
            <a href="#">{blog?.author}</a>
            <span className="sep">.</span>
            <a href="#">2 Comments</a>
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
