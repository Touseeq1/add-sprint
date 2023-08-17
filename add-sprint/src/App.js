import React, { useState } from 'react'
import Comp_input from './components/Comp_input'
const App = () => {
  const [sprintform, setSprintform] = useState([{ name: "" }])
  const handleClick = () => {
    setSprintform([...sprintform, { name: "sprint" }])
  }
  return (
    <div className='container'>
      <div className='row main-div'>
        <div className='col-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 col-xxl-8 '>
          <div className='div'>
            {sprintform.map(() => {
              return (
                <div className='card'>
                  <div className='card-body'>
                    <h1 className="todo">Sprint</h1>
                    <div className='row'>
                      <Comp_input />
                    </div>
                  </div>
                </div>)
            })}
            <div className='col-12 dd'>
              <button className='add-form btn btn-outline-primary' onClick={handleClick}>AddSprint</button>
            </div>
          </div>
        </div>
      </div>
    </div>)
}
export default App