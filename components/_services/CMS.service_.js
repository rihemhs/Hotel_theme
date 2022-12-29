export const  CMS_Service = {
  sectionservice,
  blog,
  blogId,
  blogimgId,
  Service,
  ServiceId,
  ServiceimageId,
  commentId_services,
  Comment,
  commentId,

 }
//Api SectionService
function sectionservice() { 
   return fetch(process.env.NEXT_PUBLIC_CMS+'/page-home?populate=sectionservice.CartElement.image', {
      method: 'get',

   }).then(handleResponse);
  
}

//Api our bloc
function blog() { 
   return fetch(process.env.NEXT_PUBLIC_CMS+'/blogs?populate=*', {
      method: 'get',
     
 }).then(handleResponse); 
}
//Api bloc with id
function blogId(title) { 
   return fetch(process.env.NEXT_PUBLIC_CMS+`/blogs?filters[title_for_technical_use][$eq]=${title}&populate=metatag`, {
      method: 'get',
     
   }).then(handleResponse);  
}
//Api blog image with is

function blogimgId(title) { 
   return fetch(process.env.NEXT_PUBLIC_CMS+`/blogs?filters[title_for_technical_use][$eq]=${title}&populate=image`, {
      method: 'get',
     
   }).then(handleResponse);
  
}
//Api Service
function  Service() { 
   return fetch(process.env.NEXT_PUBLIC_CMS+'/services?populate=*', {
      method: 'get',
     
 }).then(handleResponse);

}
//Api service Id
function ServiceId(title) { 
   return fetch(process.env.NEXT_PUBLIC_CMS+`/services?filters[name_for_technical_use][$eq]=${title}&populate=metatag`, {
     method: 'get',
     
   }).then(handleResponse);
     
}
//Api service image display image

function ServiceimageId(title) { 
   return fetch(process.env.NEXT_PUBLIC_CMS+`/services?filters[name_for_technical_use][$eq]=${title}&populate=image`, {
     method: 'get',
     
   }).then(handleResponse);
  
}
//Api comment-service

function commentId_services(title) { 
   return fetch(process.env.NEXT_PUBLIC_CMS+`/services?filters[name_for_technical_use][$eq]=${title}&populate=comments`, {
     method: 'get',
     
   }).then(handleResponse); 
}
//Api comment
function Comment() { 
   return fetch(process.env.NEXT_PUBLIC_CMS+`/comments?populate=*`, {
     method: 'get',

   }).then(handleResponse);

}
//Api comment with bloc
function commentId(title) { 
   return fetch(process.env.NEXT_PUBLIC_CMS+`/blogs?filters[title_for_technical_use][$eq]=${title}&populate=comments.Image`, {
     method: 'get',
     
   }).then(handleResponse); 
}


// handle response
function handleResponse(response) {
    return response.text().then(text => {
      let data = text && JSON.parse(text);
       if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
       }
   
       return data;

    });
 }