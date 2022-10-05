import React from "react"
import { useSelector, useDispatch } from "react-redux"

import Card from "../../components/TaskCard"
import LeftBar from "./LeftBar"
import RightBar from "./RightBar"
import Header from "../../components/Header"

import { completeTask } from "../../state/todo"

const ToDo = () => {
  const tasks = useSelector(({todo}) => todo.tasks)
    .filter(task => !task.done)
  const categories = useSelector(({todo}) => todo.categories)

  const dispatch = useDispatch()
  const getColors = categoryName => categories.filter( category => category.name === categoryName )[0].colors

  return (
    <div className="flex flex-col lg:flex-row flex-wrap py-4">
      <div className="px-4 py-4 w-full 2xl:w-96">
        <LeftBar />
      </div>
      <div className="2xl:basis-1/2 px-4 py-4 w-full">
        <Header text="Things to Do" />
        <div className="flex gap-x-2 gap-y-2 flex-wrap">
          {tasks.map(({ id, content, due, category, value, done }) => (
            <Card
              key={id}
              text={content}
              colors={getColors(category)}
              footerPills={[
                category,
                due,
                `${value} 🪙`
              ]}
              onDblClick={ () => { dispatch(completeTask(id)) }}
            />
          ))}
        </div>
      </div>
      <div className="px-4 py-4 w-full 2xl:w-96">
        <RightBar />
      </div>
    </div>
  )
}

export default ToDo
