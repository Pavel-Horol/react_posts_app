import React, {useState, useEffect } from "react";
import PostService from "../API/PostService";
import { useFetching } from "../components/hooks/useFetch";
import { usePosts } from "../components/hooks/usePost";
import { useRef } from "react";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/Ui/Button/MyButton";
import Loader from "../components/Ui/loader/Loader";
import Pagination from "../components/Ui/MyModal/pagination/Pagination";
import MyModal from "../components/Ui/MyModal/select/MyModal";
import "../styles/app.css";
import { getPageCount } from "../utils/pages";
import { useObserver } from "../components/hooks/useObserve";
import MySelect from "../components/Ui/select/MySelect";
function Posts() {

	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({sort: "", query: ""})
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const lastElement = useRef()

	const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
			const response = await PostService.getAll(limit, page)
			setPosts(response.data)
			const totalCount = response.headers['x-total-count']
			setTotalPages(getPageCount(totalCount, limit))
	})

	// useObserver(lastElement, page < totalPages, isPostsLoading, () => {
	// 	setPage(page + 1)
	// })

	useEffect(() => {
		fetchPosts(limit, page)
	},[page, limit])


	const createPost = (newPost) => {
		setPosts( [...posts, newPost])
		setModal(false)
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id ))
	}

	const changePage = (page) => {
		setPage(page)
	}

	return (
		<div className="App">
			<MyButton
			style ={{marginTop: "15px"}}
			onClick = {() => setModal(true)}
			>Create post</MyButton>
			<MyModal visible = { modal } setVisible = {setModal}>
      			<PostForm create = {createPost} />
			</MyModal>

			<hr style={{margin: "15px 0"}}/>

			<PostFilter 
				filter = {filter}
				setFilter ={setFilter}
			/>
			{/* <MySelect
			value = {limit}
			onChange={value => setLimit(value)}
			defaultValue = "quantity of posts"
			options={[
				{value: 5, name:'5'},
				{value: 10, name:'10'},
				{value: 15, name: '15'},
				{value: -1, name: 'Show all'}
			]}
			/>  */}
			{postError && 
				<h1>Error is happend: ${postError}</h1>
			}
			
			{isPostsLoading 
			? <div ref={lastElement} style={{display: "flex", justifyContent: "center", marginTop: "50px"}}> <Loader/></div> 
			: <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = "List of posts 1"/> 
			}
			
			<Pagination 
			page ={page}
			changePage={changePage} 
			totalPages={totalPages}/>
    </div>
	
  );
}

export default Posts;



