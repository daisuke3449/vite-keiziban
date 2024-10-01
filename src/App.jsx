import React from 'react'
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function App() {
  const [threads, setTreads] = useState([])

  useEffect(() => {
    getData();
  },[]);

  const getData = () => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=20")
    .then((response)=>{
      if(!response.ok) {
        throw new Error("APIからのデータ取得に失敗しました。");
      }
      return response.json();
    })
    .then((data) =>{
      setTreads(data);
      console.log(data);
    })
    .catch((error)=>{
      console.error("エラー:",error);
    });
  };

  return (
    <>
      <header>新着スレッド</header>
      <main>
        <ul>
          {threads.map((thread)=>(
            <li key={thread.id}>{thread.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default App
