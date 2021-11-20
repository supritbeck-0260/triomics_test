import axios from "axios";
import { FETCH_USERS, GET_COMMENTS, UPDATE_COMMENT } from "./url";

export const getComments = async () => {
    try {
      const response = await axios.get(GET_COMMENTS);
      return {data:response.data};
    } catch (error) {
      return {error:'Could not fetch comments.'};
    }
  };
  export  const fetchUers = async ()=>{
    try {
      const response = await axios.get(FETCH_USERS);
      return {data:response.data.data}
     
    } catch (error) {
      return {error:"Could not fetch Users."}
    }
  }
  export const updateComment =async (commentId,userId)=>{
    try {
      const response = await axios.put(UPDATE_COMMENT,
        {
          commentId,
         userId
        }
      );
      return {data:response.data}
     
    } catch (error) {
      return {error:'Could not update comment'}
    }
  }