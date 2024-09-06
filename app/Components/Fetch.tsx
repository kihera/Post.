
import React from 'react'
import Link from 'next/link'
import { Separator } from '@radix-ui/react-separator';

interface Post {
 UserId : number;
 Id : number;
 title : string;
 body : string;

}

const Post = async () => { 
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const Post: Post[] = await res.json();
      return (
       

        
        <Link href={"/Detail"}>
       <ol type="a">
        {Post.map(post => 
        <React.Fragment key={post.Id}>
        <Separator className="my-4 border border-black" />

        <li>
          
        {post.title} 
        </li>
        </React.Fragment>
      )}
   </ol>
</Link>

         )}

export default Post