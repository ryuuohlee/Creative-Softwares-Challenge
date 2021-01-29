import React, { useState } from 'react';


const TaskModal = (props) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');

  const handleTaskTitle = (event) => {
    setTask(event.target.value)
  }

  const handleDueDate = (event) => {
    setDate(event.target.value)
  }

  const handlePriority = (event) => {
    setPriority(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  console.log(task, date, priority)

    return (
      <div className="Tasks">
        <form>
          <div className='taskName'>
            <label htmlFor='task'>Task: </label>
            <input
              type='text'
              id='taskName'
              onChange={handleTaskTitle}
            />
          </div>
          <div className='taskDate'>
            <label htmlFor='taskDate'>Due Date: </label>
            <input
              type='date'
              id='taskDate'
              onChange={handleDueDate}
            />
          </div>
          <div className='taskPriority'>
            <label htmlFor='taskPriority'>Priority: </label>
            <input
              type='radio'
              id='taskPriority'
              onChange={handlePriority}
              value="Low"
            /> Low
            <input
              type='radio'
              id='taskPriority'
              onChange={handlePriority}
              value="Medium"
            /> Medium
            <input
              type='radio'
              id='taskPriority'
              onChange={handlePriority}
              value="High"
            /> High
          </div>
          <input type="submit" value='Save'/>
        </form>
      </div>
    );
}

export default TaskModal;