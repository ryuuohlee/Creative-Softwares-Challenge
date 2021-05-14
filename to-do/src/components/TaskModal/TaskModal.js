import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Form, TaskData } from './TaskModalStyle.js';

const TaskModal = (props) => {
  const { tasks, setTasks, closeModal } = props;
  const [taskTitle, setTaskTitle] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  const handleTaskTitle = (event) => {
    setTaskTitle(event.target.value)
  }

  const handleDueDate = (select) => {
    const dateData = select.toString().split(' ');
    setDate(`${dateData[1]} ${dateData[2]}, ${dateData[3]}`)
  }

  const handlePriority = (event) => {
    setPriority(event.target.value)
  }

  const handleSubmit = (event) => {
    setTasks([...tasks, {
      id: tasks.length+1,
      task: taskTitle,
      date: date,
      priority: priority,
      status: false
    }])
    closeModal();
  }

    return (
      <div className="Tasks">
        <Form onSubmit={handleSubmit} >
          <h1>
            Enter your Task
          </h1>
          <TaskData className='taskDate'>
            <label htmlFor='taskDate'>Due Date: </label>
            <DatePicker
              selected={startDate}
              onSelect={handleDueDate}
              onChange={date => setStartDate(date)}
              isClearable
              required
            />

          </TaskData>
          <TaskData className='taskName'>
            <label htmlFor='task'>Task: </label>
            <input
              type='text'
              id='taskName'
              onChange={handleTaskTitle}
              required
            />
          </TaskData>
          <TaskData className='taskPriority'>
            <label htmlFor='taskPriority'>Priority: </label>
            <input
              type='radio'
              id='taskPriority'
              name='priority'
              onChange={handlePriority}
              value="Low"
            /> Low
            <input
              type='radio'
              id='taskPriority'
              name='priority'
              onChange={handlePriority}
              value="Medium"
            /> Medium
            <input
              type='radio'
              id='taskPriority'
              name='priority'
              onChange={handlePriority}
              value="High"
            /> High
          </TaskData>
          <input type="submit" value='Save' />
        </Form>
      </div>
    );
}

export default TaskModal;