import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../components/hooks/useFetch';
import PostService from '../API/PostService';
import { useState } from 'react';
import Loader from '../components/Ui/loader/Loader';

const PostIdPages = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState({})
    const [fetchPostById, isLoading, error ] = useFetching(async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError ] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(params.id)
        setComments(response.data)
    })
    useEffect(() =>{
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
  return (
      <div>
        <h1>U opend  post`s page with ID = {params.id}</h1>
        {isLoading 
            ? <Loader/>
            : <div>{post.id} {post.title}</div>
        }
        <h1>
            Comments
        </h1>
        {isComLoading
        ?<Loader/>
        :<div>
            {Array.from(comments).map((comm, index) =>                 
                <div style={{marginTop: 15}} key = {index}>
                    <h5>{comm.email}</h5>
                    <div>{comm.body}</div>
                </div>
            )}

        </div>}
    </div>
  )
}

export default PostIdPages