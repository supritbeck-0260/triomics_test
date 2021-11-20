import { useState } from "react";
import { fetchUers } from "../APIs/Axios";
import Modal from "../Modal/Index";
import './comments.css';
const Comments =({comments}) =>{
    const [users,setUsers] = useState(null);
    const [commentId,setCommentId] =useState(null)
    const clickHandler = async (commentId)=>{
        const {data,error} = await fetchUers()
        if(error) return alert(error)
        setUsers(data)
        setCommentId(commentId)
    }
    const closeHandler = ()=>{
        setUsers(null)
        setCommentId(null)
    }
    return (
       <>
        {Array.isArray(comments) && 
        <div className='comments'>
            {comments.map((comment, index) => (
                <div key={comment.id} onClick={()=>clickHandler(comment.id)} className='oneComment'>
                <p>{comment.id}</p>
                <p >{comment.name}</p>
                </div>
            ))}
           {Array.isArray(users) && <Modal users={users} commentId={commentId} close={closeHandler}/>}
        </div>}
        </>
    )
}
export default Comments;
