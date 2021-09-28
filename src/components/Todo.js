//{todo} toma el valor de lo que escribamos en el form

const Todo = ({todo, index, deletetodo}) => {
    return(
        <div className="list">
        
       <h2>{todo}</h2> 
        <button className="btn-delete" onClick={() => deletetodo(index)}>x</button>
        </div>
    )
    }
export default Todo;