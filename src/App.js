import "./App.css";
import { useState } from "react";
import Comments from "./Comments/Index";
import { getComments } from "./APIs/Axios";
// https://jsonplaceholder.typicode.com/posts/1/comments -> api to fetch comment

// https://reqres.in/api/users?page=2 -> api to fetch users

// https://jsonplaceholder.typicode.com/guide/ -> api to update comment
//method - put , payload -{userid,commentId}
export default function App() {
  const [comments, setComments] = useState(null);
  const clickHandler = async ()=>{
    const {data,error} = await getComments();
    if(error)return alert(error);

    setComments(data)
  }
  return (
    <div className="App">
      <button onClick={clickHandler}>Get Comment</button>
      <Comments comments={comments}/>
     
    </div>
  );
}
