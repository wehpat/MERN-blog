import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Spinner } from "flowbite-react";
import CallToAction from '../components/CallToAction.jsx';

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [post, setPost] = React.useState(null);
  console.log(post);

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if(!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if(res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false); 

        }
      } catch(err) {
          setError(true);
          setLoading(false);
        }
    }
    fetchPost();
  }, [postSlug]);

  if (loading) return (
    <div className='flex justify-center items-center min-h-screen'>
      <Spinner size='xl'/>
    </div>
  )

  return (
    <main className='p-3 flex flex-col'>
      <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>{post && post.title }</h1>
      <Link to={`/search?category=${post.category}`} className='self-center mt-5'>
        <Button color='gray' pill size='xs'>{post && post.category}</Button>
      </Link>
      <img src={post && post.image} alt={post && post.title} className='mt-10 p-3 h-full w-full object-cover'/>
      <div className='flex justify-between p-3 border-b border-slate'>
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span>{post && (post.content.length / 1000).toFixed(0)} min{((post.content.length/1000).toFixed(0) >1) ? "s" : ""} read </span>
      </div>
      <div className='p-3 max-w-2xl mx-auto w-full post-content'
      dangerouslySetInnerHTML={{__html: post && post.content}}>

      </div>
      <div className='max-w-4xl mx-auto w-full'>
        <CallToAction/>
      </div>
    </main>

  )
} 
  