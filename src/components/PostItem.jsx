import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom'

function PostItem(props) {

  const navigate = useNavigate();
  return (
    <div className="posts">
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="posts__btn">
        <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>View</MyButton>
        <MyButton onClick={() => props.removePost(props.post)}>Delete post</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
