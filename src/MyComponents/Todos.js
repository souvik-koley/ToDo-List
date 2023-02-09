import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    let myStyle = {
        minHeight: "51vh",
        margin: "10px auto"
    }
    return (
        <div className='container' style={myStyle}>
            <h3 className='my-3'>ToDo List</h3>
            {props.todos.length === 0 ? "No Todos To display" :
                props.todos.map((todo) => {
                    return (
                    <>
                        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                        <hr />
                    </>
                    )
                })}
        </div>
    )
}

export default Todos
