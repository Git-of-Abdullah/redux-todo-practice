import { TodoForm } from "./Components/TodoForm"
import { Todos } from "./Components/Todos"



function App() {


  return (
    <>
    <div className=" bg-gray-300 w-[100%] h-[100vh] flex items-center justify-center">
      <div className=" bg-white md:w-[40%] w-[100%] h-auto max-h-[500px] overflow-y-auto min-h-[200px] p-2">
        <TodoForm/>
        <Todos/>
      </div>
    </div>
    </>
  )
}

export default App
