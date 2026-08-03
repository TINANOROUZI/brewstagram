import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PostList from './components/PostList'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://brewstagram.onrender.com';

export default function App(){
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    axios.get(`${apiBaseUrl}/api/posts`)
      .then(r => setPosts(r.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="app">
      <h1>Brewstagram</h1>
      <PostList posts={posts} />
    </div>
  )
}
