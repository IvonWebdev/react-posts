import { useMemo } from 'react'

export const useSortedPosts = (posts: any, sort: string) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a: any, b: any) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [posts, sort]);

    return sortedPosts;
}

export const usePosts = (posts: any, sort: string, search: string) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const searchedAndFilteredPosts = useMemo(() => {
        return sortedPosts.filter((post: any) => post.title.toLowerCase().includes(search))
    }, [search, sortedPosts]);
    return searchedAndFilteredPosts;
}