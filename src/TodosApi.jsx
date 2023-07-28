import { useGetTodosQuery } from "./store/apis/todosApi"

export const TodosApi = () => {

    const { data = [], isLoading } = useGetTodosQuery()


    return (
        <>
            <h1>Todos Api</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'Verdadero' : 'Falso'}</h4>
            <pre>...</pre>

            <ul>
                {data.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'Done' : 'Pending'}</strong> {todo.title}
                    </li>
                ))}
            </ul>

            <button>
                Next
            </button>
        </>
    )
}
