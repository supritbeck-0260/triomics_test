// import "./styles.css";
import axios from "axios";
import { useState } from "react";
import Modal from "./Modal";

// https://jsonplaceholder.typicode.com/posts/1/comments -> api to fetch comment

// https://reqres.in/api/users?page=2 -> api to fetch users

// https://jsonplaceholder.typicode.com/guide/ -> api to update comment
//method - put , payload -{userid,commentId}
export default function App() {
  const [comments, setComments] = useState([]);
  const [users,setUsers] = useState([])
  const getComments = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUers = async ()=>{
    try {
      const response = await axios.get(
        "https://reqres.in/api/users?page=2"
      );
      setUsers(response.data.data)
     
    } catch (error) {
      console.log(error);
    }
  }
  const updateComment =async ({commentId,userId})=>{
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/guide",{
          id:commentId,id:userId
        }
      );
      console.log(response)
     
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <button onClick={getComments}>Get comments</button>
      <div onClick={fetchUers}>
      {comments.map((comment, index) => (
        <div key={comment.id}>
        <p >{comment.name}</p>
        {users.length &&<Modal users={users} updateComment={updateComment} commentId={comment.id}/>}
        </div>
      ))}
      </div>
      <hr/>
     
    </div>
  );
}
