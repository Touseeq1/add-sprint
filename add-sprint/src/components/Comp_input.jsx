import React, { useState } from 'react'
const Comp_input = () => {
  const [value, setValue] = useState('');
  const [task, setTask] = useState([]);
  const handleInput = (e) => {
    setValue(e.target.value);
  }
  const addTask = () => {
    setTask([...task, value]);
    // setValue("");
    document.getElementById("form").reset()
  }
  const deleteItem = (i) => {
    const deletVal = [...task]
    deletVal.splice(i, 1)
    setTask(deletVal)
  }
  return (
    <>
      <div className='row'>
        <div className='col-9'>
          <form id='form'>
            <input className='form-control input' type="text" placeholder='Enter your task' onChange={handleInput} />
          </form>
        </div>
        <div className='col-3 d-flex justify-content-end'>
          <button className='btn btn-outline-success' onClick={addTask}>AddTask</button>
        </div>
      </div>
      <div className='row'>
        <div className='list col-8 mt-4'>
          {task.map((item, i) => {
            return (
              <div className='stylelis'>
                <li>{item}</li> <i className="fa-solid fa-calendar-xmark delete" onClick={() => deleteItem(i)} />
              </div>)
          })}
        </div>
      </div>
    </>
  )
}
export default Comp_input