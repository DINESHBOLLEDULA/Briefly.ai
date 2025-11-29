import { useEffect, useState } from 'react'

import './App.css'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
function App() {
    const [msg,setMsg]=useState('')

    useEffect(()=>{
      fetch(`${API_BASE_URL}/api/hello`)
      .then(res=>res.json())
      .then(res =>setMsg(res.message))
      .catch(e=>setMsg(e.message))
    },[])

    const send=async ()=>{
      const res= await fetch(`${API_BASE_URL}/api/echo`,
        {method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({hello:'from react'})
        }
      );
      const ans= await res.json();
      alert(JSON.stringify(ans));
      
    }
  return (
    <>
      <p>{msg}</p>
      <div>
        <button onClick={send}>say hello to flask</button>
      </div>
    </>
  )
}

export default App
