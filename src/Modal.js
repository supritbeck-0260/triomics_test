const Modal = ({users,updateComment,commentId})=>{
    console.log(users)
    return(
        <div className='modal' >{Array.isArray(users) && users.map(user=>
        <p key={user.id} onClick={()=>updateComment(commentId,user.id)}>{user.first_name + " " +user.last_name}</p>
        )}
        </div>
    )
}
export default Modal;