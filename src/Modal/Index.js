import { updateComment } from '../APIs/Axios';
import './modal.css';
const Modal = ({users,commentId,close})=>{
    const clickHander = async (userId)=>{
        const {data,error} = await updateComment(commentId,userId);
        if(error) return alert(error)
        
        alert('Comment Updated.')
        close()
    }
    return(
        <div className='modal' >
            <div className='modalBody'>
                <button onClick={close}>close</button>
                { users.map(user=>
                <p className='oneUser' key={user.id} onClick={()=>clickHander(user.id)}>
                    {user.first_name + " " +user.last_name}
                </p>
                )}
            </div>
 </div>
    )
}
export default Modal;