import axios from "axios"
import { useState } from "react"

type TodoList = {
  title : string
}

function App() {
  let [data, setData] = useState([])
  axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(response =>{
      setData(response.data)
    })

  return <div>{data.map(todo => <Todo title = {todo.title}/>)}</div>  
}


function Todo(props ){
  return <div style={{margin: 10,padding: 20,border: "1px solid #ddd",borderRadius: 10,backgroundColor: "#fff",boxShadow: "0 2px 8px rgba(0,0,0,0.1)",}}>
    <div>
      {props.title}
      </div>
  </div>
}

export default App