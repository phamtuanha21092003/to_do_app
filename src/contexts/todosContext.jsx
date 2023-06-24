import { useState, createContext } from "react"

export const ToDoesContext = createContext([])

export default function ContextProvider({ children }) {
      const [toDoes, setToDoes] = useState([{ title: "learn react js" }])

      function addToDo(title) {
            if (!title) {
                  alert("Nội dung đang rỗng vui lòng thử lại")
                  return
            }
            setToDoes((toDoes) => [...toDoes, { title }])
      }

      function delToDo(index) {
            setToDoes((toDoes) => toDoes.toSpliced(index, 1))
      }

      function updateToDo(index, newTitle) {
            if (!newTitle) {
                  alert("Nội dung đang rỗng vui lòng thử lại")
                  return
            }
            setToDoes((toDoes) => toDoes.with(index, { title: newTitle }))
      }

      return (
            <ToDoesContext.Provider
                  value={{ toDoes, addToDo, delToDo, updateToDo }}
            >
                  {children}
            </ToDoesContext.Provider>
      )
}
