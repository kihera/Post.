import React from 'react'
import Detail from '../Components/Comments';




interface Page {
  UserId : number;
  Id : number;
  title : string;
  body : string;
}

const page = async () => { 
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const Page: Page[] = await res.json();
    return ( 

     <>
      <div className="text-2xl font-bold mb-4">
    {Page && Page.slice(0,1).map( (record) => (
     <div key={record.Id}>
    {record.body}
 </div> 
) )}

 </div>
 
<Detail/>

</>
             )}

export default page