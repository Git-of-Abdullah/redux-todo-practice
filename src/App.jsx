import { TodoForm } from "./Components/TodoForm"
import { Todos } from "./Components/Todos"



function App() {


  return (
    <>
    <div className=" bg-[rgb(0,26,51)]/80 w-[100%] h-[100vh] flex items-center flex-col justify-center">
      <h1 className="text-3xl font-bold mb-3 text-white"> Todo App </h1>
      <div className=" bg-white md:w-[40%] w-[100%] h-auto max-h-[500px] overflow-y-auto min-h-[200px] p-2">
        <TodoForm/>
        <Todos/>
      </div>
    </div>
    </>
  )
}

export default App
