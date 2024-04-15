
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostsService from '../API/PostsService';

export interface IPost {
    userId: number
    id: number
    title: string
    completed: boolean
}

function PostPage() {

    const params = useParams();
    const [post, setPost] = useState({} as IPost);
    const [fetchById, isLoading, error] = useFetching(async () => {
        const response = await PostsService.getById(params.id as string);
        setPost(response.data);
    })

    useEffect(() => {
        // @ts-ignore
        fetchById();
    }, [])

    return (
        <div className='App'>
            <h1>Post {params.id} Page</h1>
            <div>{post.title}</div>
        </div>
    );
}

export default PostPage;
