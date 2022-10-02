import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

import ToDo from "./pages/ToDo"

const App = () => {
  const [isDark, setDark] = useState(true)
  return (
    <div className={`${isDark ? `dark` : ``}`}>
      <div className="dark:bg-slate-800 min-h-screen">
        <div className="container mx-auto">
          <ToDo />
        </div>
        <footer className="py-4 px-8 bg-white md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 absolute bottom-0">
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 text-sm text-white py-1 px-2 rounded"
            type="button"
            onClick={() => {
              setDark(!isDark)
            }}
          >
            {isDark ? `Light Mode ` : `Dark Mode `}
            {isDark ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
        </footer>
      </div>
    </div>
  )
}

export default App
