import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PostList from './components/PostList'

export default function App(){
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    // Default to Node backend at 4000; change to Java backend at 8080 if preferred
    axios.get('http://localhost:4000/api/posts')
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
