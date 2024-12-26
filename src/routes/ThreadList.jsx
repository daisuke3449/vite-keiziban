import React,{useState,useEffect} from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export const ThreadList = () => {
  const [threads,setThreads] =useState([])

  useEffect(() => {
    const fetchThreads = async () => {
      try{
        const response = await axios.get(
          "https://railway.bulletinboard.techtrain.dev/threads");
        setThreads(response.data);
      } catch (error){
        console.error("Error fetching threads:",error)
      }
      }
      fetchThreads();
  },[])

  return (
    <div>
      <h2>新着スレッド</h2>
      <Link to="/threads/new">
      <button>新規スレッド作成</button>
      </Link>
      <ul>
          {threads.map((thread,index)=>(
            <li key={index}>{thread.title}</li>
          ))}
        </ul>
    </div>
  );
  }



export default ThreadList