import React from "react"
import { useSelector } from "react-redux"
import DoneTask from "../../components/DoneTask"
import Header from "../../components/Header"

const DoneBar = () => {
  const doneTasks = useSelector(({todo}) => todo.tasks.filter(task => task.done))
  const points = doneTasks.reduce( (pts, {value}) => pts + parseInt(value), 0)
  return (
    <div>
      <Header text="Things Done 🎉" />
      {doneTasks.map(task => 
        <DoneTask text={ task.content } value={ task.value } id={ task.id } />
      )}
      {points > 0 ? (
        <div className="py-4 px-4">
          <h2 className="font-bold dark:text-slate-100">Total: <span className="text-green-500">{points}🪙</span></h2>
        </div>
      ) : ""}
    </div>
  )
}

export default DoneBar
