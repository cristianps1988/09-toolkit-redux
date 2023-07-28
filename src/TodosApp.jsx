import { useState } from "react"
import { useGetTodosQuery, useGetTodoByIdQuery } from "./store/apis/todosApi"

export const TodosApp = () => {
    const [todoID, settodoID] = useState(1)

    // const { data = [], isLoading } = useGetTodosQuery()
    const { data = [], isLoading } = useGetTodoByIdQuery(todoID)


    const prevTodo = () => {
        if (todoID == 1) return

        settodoID(todoID - 1)
    }

    const nextTodo = () => {
        settodoID(todoID + 1)
    }

    return (
        <>
            <h1>Todos Api</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'Verdadero' : 'Falso'}</h4>
            <pre>...</pre>

            {/* <ul>
                {data.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'Done' : 'Pending'}</strong> {todo.title}
                    </li>
                ))}
            </ul> */}

            <button onClick={prevTodo}>
                Prev
            </button>

            <button onClick={nextTodo}>
                Next
            </button>
            <hr />

            {JSON.stringify(data)}
        </>
    )
}
