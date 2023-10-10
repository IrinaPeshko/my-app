import React from 'react';
import s from"./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea name="addPost" id="addPost" cols="30" rows="10"></textarea>
        <button>Add Post</button>
      </div>
      <div>New Posts</div>
      <div className={s.posts}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
export default MyPosts;