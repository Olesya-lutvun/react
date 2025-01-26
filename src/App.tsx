import {useFetch} from "./hooks/useFetch"
import './App.css'

function App() {
    const users =
        useFetch<{ id: number, name: string }[]>('https://jsonplaceholder.typecode.com/users')
    return (
        <>
            {
                users &&
                users.map((user: { id: number, name: string }) => (
                    <div key={user.id}>
                        {user.id}:{user.name}


                    </div>


                ))
            }
        </>
    )
}

export default App
