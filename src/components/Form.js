import { useState } from "react"
import Todo from "./Todo"

const Form = () => {
  //estado inicial, sin tareas
const[todos, setTodos] = useState([])
// voy actualizando conforme cargue una tarea
const[todo, setTodo] = useState({})
  // cada vez que aprete "+" settodos tendra las tareas ya cargadas mas la nueva
const handleClick = e =>  setTodos([...todos, todo] )

// ------- esta linea devuelte "todo : lo que escribamos"
const handleChange = e =>  setTodo({[e.target.name]: e.target.value})

//borra a traves de key
const deletetodo = indice => {
    const newTodos = [...todos]
    newTodos.splice(indice, 1)
    setTodos(newTodos)
}

 

return(

      <div>
      <h3> todolist </h3>
      
      
{/*campo de tipo texto  con una funcion on change que se actualiza a medida que escribimos en el*/}
      <form onSubmit={(e) => {e.preventDefault(); }}>
          <input type="text" name="todo" placeholder="put your task" onChange={handleChange}/> 
          <button onClick={handleClick}>+</button>
      </form>
      {/*mapeo los Todo con value e index */}
      {todos.map((value, index) => (
           
        <Todo todo={value.todo}  key={index}  deletetodo={deletetodo}/>
      ))}
      </div>
      

  )
}

// todo={value.todo}  = la tarea que escribimos
//key={index} = obligatorio
// deletetodo={deletetodo} = boton de eliminado
export default Form
