import React from "react"
import { useSelector } from "react-redux"
import DoneTask from "../../components/DoneTask"
import Header from "../../components/Header"

const DoneBar = () => {
  const doneTasks = useSelector(({todo}) => todo.tasks.filter(task => task.done))
  const points = doneTasks.reduce( (pts, {value}) => pts + value, 0)
  return (
    <div>
      <Header text="Things Done 🎉" />
      {doneTasks.map(task => 
        <DoneTask text={ task.content } value={ task.value } id={ task.id } />
      )}
      {points > 0 ? (
        <h2 className="py-4 px-4 text-green-500 font-bold">{points} 🪙</h2>
      ) : ""}
    </div>
  )
}

export default DoneBar
