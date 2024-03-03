import React, { useState } from 'react'
import './Style.css'
import { MdLiveHelp } from "react-icons/md";



const App = () => {

  const [open, isOpen] = useState(false)

  const openHelp = () => {
    isOpen(!open)
    setTimeout(() => {
      isOpen(false)
    }, 5000)
  }

  const color = [
    {
      Id: 1,
      colorName: "Green",
      hexCode: "#416D19"
    },
    {
      Id: 2,
      colorName: "Yellow",
      hexCode: "#FFF67E"
    },
    {
      Id: 3,
      colorName: "Pink",
      hexCode: "#FF3EA5"
    },
    {
      Id: 4,
      colorName: "Blue",
      hexCode: "#6420AA"
    }
  ]


  const changeBackground = (bgColor) => {
    document.getElementById('body').style.backgroundColor = bgColor
  }
  return (
    <section>
      <div className="help-section">
        <div className="question-icon"
          onClick={openHelp}
        >
          <MdLiveHelp size={44} />
        </div>
        {
          open ? <div className="help">
            Click on buttons below for change the color of page
          </div> : ""
        }
      </div>

      <div className="container">

        {color.map((color) => {
          return (
            <button
              style={{ backgroundColor: `${color.hexCode}` }}
              key={color.Id}
              onClick={() => changeBackground(color.hexCode)}
              className='Purple btn'> {color.colorName} </button>
          )
        })}
      </div>
    </section>
  )
}

export default App