
import React from 'react'
import Link from 'next/link'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Detail {
  postId : number;
  id : number;
  name : string;
  body : string;
  email : string;
}



const Detail = async () => { 
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    const Comm: Detail[] = await res.json();
      return (
   
        
      // <table>
      //  <tbody >
      //   {Comm.map(com => <tr key={com.id}> 
      //    <td>{com.name}</td>
      //    <td>{com.email}</td>
      //    <td>{com.body}</td>
      //    </tr>)}
      //  </tbody> 
      //  </table>
    

      <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-center">Comment</TableHead>
        </TableRow> 
      </TableHeader>
      <TableBody>
        {Comm.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell className="text-right">{item.body}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

  )}


export default Detail