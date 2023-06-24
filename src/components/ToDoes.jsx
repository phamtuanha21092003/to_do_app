import { useContext } from "react"
import { ToDoesContext } from "../contexts/todosContext"
import ToDo from "./ToDo"

export default function ToDoes() {
      const { toDoes } = useContext(ToDoesContext)
      return (
            <>
                  {toDoes.map((toDo, index) => (
                        <ToDo
                              key={`${toDo.title}_index${index}`}
                              toDo={toDo}
                              index={index}
                        />
                  ))}
            </>
      )
}
