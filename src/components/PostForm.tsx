import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function PostForm({ createPost }: any) {
    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e: Event) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: + new Date()
        }
        createPost(newPost);
        setPost({ title: '', body: '' });
    }

    return (
        <form >
            <MyInput
                value={post.title}
                type="text"
                placeholder='Post title'
                onChange={(e: any) => setPost({ ...post, title: e.target?.value })} />
            <MyInput
                value={post.body}
                type="text"
                placeholder='Post body'
                onChange={(e: any) => setPost({ ...post, body: e.target?.value })} />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
}

export default PostForm;
