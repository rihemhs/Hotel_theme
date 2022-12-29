import Link from "next/link";

const BlogCard = ({ title, image, text, title_for_technical_use, comments,date}) => {

  return (
    <div className="blog-one">
       <div className="imageblock">
        <div className="blockdetails">
          <img src={image} alt="Image" />
          <div className="date-block">{date}</div>
        </div>
      </div>
      
      <div className="text-of-block">
        <div className="info">
          <Link href="#">
            <a>By Admin</a>
          </Link>
          <span className="sep">.</span>        
        <Link href={`/blog/${title_for_technical_use.replace(/\s+/g, '-')}`}>
        <a>{comments?.data.length} comments</a>
        </Link>          
        </div>
        <h3>
        {title_for_technical_use? 
        <Link href={`/blog/${title_for_technical_use.replace(/\s+/g, '-')}`} as={`/blog/${title_for_technical_use.replace(/\s+/g, '-')}`}>
        <a>{title}</a>
          </Link>
                :null                
                }
        </h3>
        <p>{text}</p>
        <div className="line-block"></div>
        {title_for_technical_use?
        <Link href={`/blog/${title_for_technical_use.replace(/\s+/g, '-')}`} as={`/blog/${title_for_technical_use.replace(/\s+/g, '-')}`}>
          <a className="more-link">Read More</a>
        </Link>
        :null
        }
      </div>
    </div>
  );
};

export default BlogCard;
