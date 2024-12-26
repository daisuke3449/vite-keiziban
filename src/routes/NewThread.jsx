import React,{useEffect, useState} from "react"
import axios from "axios"
import { Link,useNavigate } from "react-router-dom"

export const NewThread = () => {
    const [makeNew,setmakeNew] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            await axios.post("https://railway.bulletinboard.techtrain.dev/threads",{
                "title":makeNew
            });
            navigate("/")
        } catch(error){
            console.error("Error creating new thread:",error);
        }
    };
    
    return (
        <div>
            <h2>新規スレッド作成</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    タイトル：
                <input type="text" value={makeNew}  onChange={(e)=>setmakeNew(e.target.value)}></input>
                <button type="submit">作成</button>
                </label>
            </form>
        </div>
    );
};



export default NewThread