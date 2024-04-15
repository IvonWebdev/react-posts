export const getPagesCount = (totalCount: number, limit: number): number => {
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalPosts: number): number[] => {
    const res = []
    for (let i = 0; i < totalPosts; i++) {
        res.push(i + 1);
    }
    return res
}