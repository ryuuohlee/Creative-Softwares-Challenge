import React from 'react';


const TaskModal = (props) => {
  console.log(props)
  const { date, priority, status, task } = props;
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