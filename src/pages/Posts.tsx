import React, { useEffect, useState } from 'react';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/myModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import PostsService from '../API/PostsService';
import MyLoader from '../components/UI/loader/MyLoader';
import { getPagesCount } from '../utils/pages';
import MyPagination from '../components/UI/myPagination/MyPagination'

function App() {
    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({ 'sort': '', 'search': '' });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const searchedAndFilteredPosts = usePosts(posts, filter.sort, filter.search);

    const [fetchPosts, isPostsLoading, error]: any = useFetching(async () => {
        const response = await PostsService.getAll(limit, page);
        setPosts(response.data);
        const totalPosts = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalPosts, limit));
    });

    useEffect(() => {
        fetchPosts();
    }, [page])

    const createPost: any = (newPost: any) => {
        setPosts([...posts, newPost] as any);
        setModal(false);
    }

    const removePost: any = (post: any) => {
        setPosts(posts.filter((p: any) => p.id !== post.id));
    }

    return (
        <div className='App'>
            <MyButton onClick={() => fetchPosts()}>Send GET request</MyButton>
            <MyButton onClick={() => setModal(true)} style={{ marginTop: 30 }}>Create post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost} />
            </ MyModal>
            <hr />
            <PostFilter filter={filter} setFilter={setFilter} />
            {error &&
                <h3>Error happened: ${error}</h3>
            }
            {isPostsLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><MyLoader /></div>
                : <PostList posts={searchedAndFilteredPosts} title='JS Posts list' removePost={removePost} />
            }
            <MyPagination totalPages={totalPages} page={page} setPage={setPage} />
        </div>
    );
}

export default App;
