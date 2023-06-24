import { useContext, useRef, useState } from "react"
import { ToDoesContext } from "../contexts/todosContext"

export default function ToDo({ toDo, index }) {
      const { title } = toDo
      const { delToDo, updateToDo } = useContext(ToDoesContext)

      const [isUpdating, setIsUpdating] = useState(false)

      const refValueUpdate = useRef(null)

      return (
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                  {!isUpdating ? (
                        <>
                              {title}
                              <button
                                    onClick={() => setIsUpdating(!isUpdating)}
                              >
                                    edit
                              </button>
                        </>
                  ) : (
                        <>
                              <input
                                    type="text"
                                    defaultValue={title}
                                    ref={refValueUpdate}
                              />
                              <button
                                    onClick={() =>
                                          updateToDo(
                                                index,
                                                refValueUpdate.current.value
                                          )
                                    }
                              >
                                    save
                              </button>
                              <button
                                    onClick={() => setIsUpdating(!isUpdating)}
                              >
                                    cancel
                              </button>
                        </>
                  )}
                  <button onClick={() => delToDo(index)}>del</button>
                  <br />
            </div>
      )
}
