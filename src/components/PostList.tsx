import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function PostList({ posts, title, removePost }: any) {

  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center' }}>No Posts found :-(</h1>
    )
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post: any, index: never) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem number={index + 1} post={post} removePost={removePost} />
          </CSSTransition>
        )}
      </TransitionGroup>

    </div>
  );
}

export default PostList;
