import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort) {
            return [...posts].sort((x, y) => {
                const a = x[sort]
                const b = y[sort]
                let res = 0
                if (a.startsWith('u') && !b.startsWith('u')) res = 1;
                if (!a.startsWith('u') && b.startsWith('u')) res = -1;
                if (a.startsWith('u') && b.startsWith('u')) res = 0;
                res = a.localeCompare(b)
                console.log(a, a, res)
                return res                
                // a[sort].localeCompare(b[sort])
            })
        }
        return posts;
    }, [sort, posts])

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts
        .filter(post => post.ln.toLowerCase().includes(query.toLowerCase()))

    }, [query, sortedPosts]) // posts, sort

    return sortedAndSearchedPosts;
}
