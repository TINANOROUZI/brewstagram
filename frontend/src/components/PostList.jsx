import React from 'react'

export default function PostList({posts}){
  if(!posts || posts.length === 0) return <div>No posts yet</div>
  return (
    <div className="posts">
      {posts.map(p => (
        <div className="post" key={p.id}>
          <div className="author">{p.author}</div>
          <img src={p.imageUrl} alt={p.caption} />
          <div className="caption">{p.caption}</div>
        </div>
      ))}
    </div>
  )
}
