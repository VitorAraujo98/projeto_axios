import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  
  const getPosts = async() => {
    try {
       const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
        );
      const data = response.data;
      console.log(data);

    } catch (error) {
      console.log(error)
      
    }
  };

  useEffect(() => {
    getPosts();

   }, [])

 
  return (
    <div>Home</div>
  )
 
}


export default Home