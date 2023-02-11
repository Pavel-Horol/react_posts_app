import React from "react";
import { useEffect, useState } from "react";
import MyButton from "./Ui/Button/MyButton";
import MyInput from "./Ui/input/MyInput";

const PostForm = function ({ create }) {

    const [post, setPost] = useState({title: "", body: ""})
    function addNewPost (e) {
		e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
		setPost({title: '', body:''})
  	}
    return(
        <form>
            <MyInput
            	value = {post.title} 
            	onChange = {e => setPost({...post, title: e.target.value})}
            	type="text" 
            	placeholder = "Name of the post"/>
            <MyInput 
		    	value = {post.body} 
		    	onChange = {e => setPost({...post, body: e.target.body})}
            	type="text" 
            	placeholder = "Description of the post"/>
            <MyButton  onClick ={addNewPost}  >Create post</MyButton>
      </form>
    )
}
export default PostForm;