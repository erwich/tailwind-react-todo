import React from "react"

const TaskCard = ({ text, colors, footerPills, onDblClick }) => {
  const { bg, hover, focus } = colors
  return (
    <div
      className={`cursor-crosshair max-w-xs rounded overflow-hidden shadow-lg ${bg} ${hover} ${focus}`}
      tabIndex="1"
      onClick={ e => {
        if( e.detail == 2 ) {
          onDblClick()
        }
      }}
    >
      <div className="px-6 py-2">
        <p className="text-slate-100 font-bold">{text}</p>
      </div>
      <div className="px-6 pt-2 pb-2">
        {footerPills
          .filter(pill => pill.length > 0)
          .map((pill, ndx) => (
            <span
              key={ndx}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {pill}
            </span>
          ))}
      </div>
    </div>
  )
}

export default TaskCard
