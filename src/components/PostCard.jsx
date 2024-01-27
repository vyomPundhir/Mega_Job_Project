import React from 'react'
import appwriteService from "../appwrite/config"
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom'

const PostCard = ({$id, title, featuredImage}) => {
  return (
    <Tilt>
      <Link to={`/post/${$id}`}>
      <div className="w-full bg-gradient-to-b from-[#101010] to-[#171717] border-[2px] border-[#3e3e4b] rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
          className='rounded-xl '/>
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
      </Link>
    </Tilt>
    
  )
}

export default PostCard