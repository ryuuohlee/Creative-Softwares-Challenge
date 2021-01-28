import React, { useState } from 'react';


const TaskModal = (props) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');

    return (
      <div className="Tasks">
        <form>
          <div className='taskName'>
            <label htmlFor='task'>Task: </label>
            <input
              type='text'
              id='taskName'
            />
          </div>
          <div className='taskDate'>
            <label htmlFor='taskDate'>Date: </label>
            <input
              type='date'
              id='taskDate'
            />
          </div>
          <div className='taskPriority'>
            <label htmlFor='taskPriority'>Priority: </label>
            <input
              type='text'
              id='taskName'
            />
          </div>
          <input type="submit" value='Save'/>
        </form>
      </div>
    );
}

export default TaskModal;