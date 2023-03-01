import React, {useEffect, useRef, useState} from 'react';
import PostService from "../API/PostService";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
// import MyButton from "../components/UI/button/MyButton";
// import PostForm from "../components/PostForm";
// import MyModal from "../components/UI/MyModal/MyModal";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/MySelect/MySelect";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    // const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        const totalCount = await response.headers['x-total-count']
        const totalPages = getPageCount(totalCount, 10) // limit
        console.log('useFetching totalCount & totalPages', totalCount, totalPages)
        setPosts([...posts, ...response.data])
        setTotalPages(totalPages);
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        console.log(page, totalPages)
        setPage(page + 1);
    })

    useEffect(() => {
        console.log('Posts useEffect Posts useEffect', page, limit)
        fetchPosts(limit, page)
    }, [page, limit]) // , fetchPosts harmful

    // const createPost = (newPost) => {
    //     setPosts([...posts, newPost])
    //     setModal(false)
    // }

    // Getting a post from a child component
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.code))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            {/* Will use it for Add Message
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Create User (Message)
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/> */}
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Records per page"
                options={[
                    {value: 5, name: '5 per page'},
                    {value: 10, name: '10 per page'},
                    {value: 25, name: '25 per page'},
                    {value: 100, name: '100 per page'},
                    {value: 200, name: '200 per page'},
                    {value: -1, name: 'Show All (may take minutes)'},
                ]}
            />
            {postError &&
                <h1>An error has occurred ${postError}</h1>
            }
            {/* 
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Unclaimed Assets Records"/>
            <div ref={lastElement} style={{height: 20, background: 'teal'}}/>
            {isPostsLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }
            {'111111111111111111111111111111111'}
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
            {'222222222222222222222222222222222'} */}
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Unclaimed Assets"/>
            <div ref={lastElement} style={{height: 20, background: 'red'}}/>
            {isPostsLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />            
        </div>
    );
}

export default Posts;
