import axios from "axios";

export const getComments = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );
      return {data:response.data};
    } catch (error) {
      return {error:'Could not fetch comments.'};
    }
  };
  export  const fetchUers = async ()=>{
    try {
      const response = await axios.get(
        "https://reqres.in/api/users?page=2"
      );
      return {data:response.data.data}
     
    } catch (error) {
      return {error:"Could not fetch Users."}
    }
  }
  export const updateComment =async (commentId,userId)=>{
    try {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/guide",{
          id:commentId,id:userId
        }
      );
      return {data:response.data}
     
    } catch (error) {
      return {error:'Could not update comment'}
    }
  }