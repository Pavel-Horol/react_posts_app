import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./Ui/Button/MyButton";
const PostItem = (props) =>{
    const navigate = useNavigate()
    
    return(
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <MyButton onClick= {() => navigate(`/posts/${props.post.id}`)} className="post__btns">
               Open
            </MyButton>
            <div className="post__btns">
                <MyButton onClick = {() => props.remove(props.post)}>Delete</MyButton>
        	</div>
      </div>
    )
}

export default PostItem