import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'
const BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:3000' 
  : '';
function App() {
    const [list,setList] =useState([])
    useEffect(()=>{
        console.log('BASE_URL',BASE_URL);
        fetch(`${BASE_URL}/api/list`)
         .then((response)=>response.json()).then(res=>{
            console.log(res);
            setList(res.message)
         })
    },[])

    debugger
    console.log(111111);
  return (
    <div className="App" style={{background:"red",height:"100vh"}}>
        hello  world
        {
            list.map(l=>{
                return <div>{l.name}</div>
            })
        }

        hello  worldhello  worldhello  world
    </div>
  );
}

export default App;
