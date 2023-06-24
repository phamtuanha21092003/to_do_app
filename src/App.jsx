import "./App.css"
import { useContext, useState } from "react"
import { ToDoesContext } from "./contexts/todosContext"
import ToDoes from "./components/ToDoes"

function App() {
      const { addToDo } = useContext(ToDoesContext)
      const [title, setTitle] = useState("")
      return (
            <>
                  <input
                        type="text"
                        name=""
                        id=""
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                  />
                  <button
                        onClick={() => {
                              //       setToDoes((todoes) => [
                              //             ...todoes,
                              //             { title, status: false },
                              //       ])
                              addToDo(title)
                              setTitle("")
                        }}
                  >
                        add
                  </button>

                  <br />
                  <ToDoes />
            </>
      )
}

export default App
