import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import { format } from "timeago.js";

import { fetchFeaturedPosts } from '/src/utils/fetch.js'
import Image from '../Image'
import ShortDesc from './ShortDesc';

const FeaturedPosts = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["featuredPosts"],
    queryFn: () => fetchFeaturedPosts(),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;

  const posts = data.posts;
  if (!posts || posts.length === 0) {
    return;
  }


  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        {posts[0].img && 
        <Image
          src={posts[0].img}
          className="rounded-3xl object-cover"
          w="895"
        />}
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to={`/posts?cat=${posts[0].category}`} className="text-blue-800 lg:text-lg">{posts[0].category}</Link>
        </div>
        {/* title */}
        <Link
          to={posts[0].slug}
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          {posts[0].title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800" to={`/posts?author=${posts[0].user.username}`}>{posts[0].user.username}</Link>
          <span className="text-gray-500">{format(posts[0].createdAt)}</span>
        </div>
        <p>{posts[0].desc}</p>
        <span className="flex flex-row space-around gap-1 text-grey-500 text-sm mt-2"> 
          {posts[0].tags.map((tag, index) => (
            <span className="bg-gray-400 hover:bg-gray-500 text-white py-0.5 px-1 rounded-full text-sm" key={index}>{tag}</span> 
          ))}
        </span>
      </div>

      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
        {posts[1].img && 
        <Image
          src={posts[1].img}
            className="rounded-3xl object-cover w-2/5 h-full"
            alt="featured"
            w="298"
          />
        }
          {/* details and title */}
          <div className="flex flex-col w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to= {`/posts?cat=${posts[1].category}`} className="text-grey-800">{posts[1].category}</Link>
            </div>
            {/* title */}
            <Link to={posts[1].slug} className="text-base sm:text-lg md: text-2xl lg:text-xl xl:text-2xl font-medium">{posts[1].title}</Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
              <span>Written by</span>
              <Link className="text-blue-800" to={`/posts?author=${posts[1].user.username}`}>{posts[1].user.username}</Link>
              <span className="text-gray-500">{format(posts[1].createdAt)}</span>
            </div>
            {/* desc */}
            <ShortDesc text={posts[1].desc} />
            {/* tags */}
            <span className="flex flex-row space-around gap-1 text-grey-500 text-sm mt-2"> 
              {posts[1].tags.map((tag, index) => (
                <span className="bg-gray-400 hover:bg-gray-500 text-white py-0.5 px-1 rounded-full text-sm" key={index}>{tag}</span> 
              ))}
            </span>
          </div>
        </div>
        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
        {posts[2].img && 
        <Image
          src={posts[2].img}
            className="rounded-3xl object-cover w-2/5 h-full"
            alt="featured"
            w="298"
          />
        }
          {/* details and title */}
          <div className="flex flex-col w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link to= {`/posts?cat=${posts[2].category}`} className="text-grey-800">{posts[2].category}</Link>
            </div>
            {/* title and details */}
            <Link to={posts[2].slug} className="text-base sm:text-lg md: text-2xl lg:text-xl xl:text-2xl font-medium">{posts[2].title}</Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
              <span>Written by</span>
              <Link className="text-blue-800" to={`/posts?author=${posts[2].user.username}`}>{posts[2].user.username}</Link>
              <span className="text-gray-500">{format(posts[2].createdAt)}</span>
            </div>
            {/* desc */}
            <ShortDesc text={posts[2].desc} />
            {/* tags */}
            <span className="flex flex-row space-around gap-1 text-grey-500 text-sm mt-2"> 
              {posts[2].tags.map((tag, index) => (
                <span className="bg-gray-400 hover:bg-gray-500 text-white py-0.5 px-1 rounded-full text-sm" key={index}>{tag}</span> 
              ))}
            </span>
          </div>
        </div>
        {/* fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
        {posts[3].img && 
        <Image
          src={posts[3].img}
            className="rounded-3xl object-cover w-2/5 h-full"
            alt="featured"
            w="298"
          />
        }
          {/* details and title */}
          <div className="flex flex-col w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <Link to={`/posts?cat=${posts[3].category}`} className="text-grey-800">{posts[3].category}</Link>
            </div>
            {/* title and details */}
            <Link to={posts[3].slug} className="text-base sm:text-lg md: text-2xl lg:text-xl xl:text-2xl font-medium">{posts[3].title}</Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
              <span>Written by</span>
              <Link className="text-blue-800" to={`/posts?author=${posts[3].user.username}`}>{posts[3].user.username}</Link>
              <span className="text-gray-500">{format(posts[3].createdAt)}</span>
            </div>
            {/* desc */}
            <ShortDesc text={posts[3].desc} />
            {/* tags */}
            <span className="flex flex-row space-around gap-1 text-grey-500 text-sm mt-2"> 
              {posts[3].tags.map((tag, index) => (
                <span className="bg-gray-400 hover:bg-gray-500 text-white py-0.5 px-1 rounded-full text-sm" key={index}>{tag}</span> 
              ))}
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FeaturedPosts