import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from 'axios'
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes').then((response) => {
      setJokes(response.data)
      console.log(response)
    }).catch((error) => {
      console.error(error);
    })
  },[])
  return (
    <>
      <h1>Usman or Code is = billionare. Code is leverage</h1>
      <h2>JOKES: {jokes.length}</h2>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h2>{joke.punchline}</h2>
          <p>{joke.setup}</p>
        </div>
      ))
      }
    </>
  );
}

export default App;
