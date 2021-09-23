
import "./App.css"
import { useEffect,useState } from 'react';
import axios from 'axios';
import UserList from './UserList';
import { Col, Container, CardGroup } from 'react-bootstrap'

function App() {
  const [list, setList] = useState(null)
  const [error, setError] = useState(null)
  useEffect(()=>
  {axios.get("https://jsonplaceholder.typicode.com/users")
    .then( response=>setList(response.data))
    .catch(err=>setError(err))
  },[])

  return (
    <div className="App">
  <div className="cardGroup">
       

              <UserList list={list}/>
              
              </div>
     
    </div>
  )}


export default App;
