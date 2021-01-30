import React from 'react';
import { TaskContainer, Low, Medium, High, Stats, Priority, ProgressName, Label, NotSelected, Calendar, DueDate } from './TaskStyle.js';
import calendar from '../../calendar-with-spring-binder-and-date-blocks.png';

const Task = (props) => {
  const { date, priority, status, task, tasks, setTasks, id } = props;

  const handleStatus = (event) => {
    const job = {
      id: id,
      date: date,
      task: task,
      priority: priority,
      status: !status,
    }
    const newTasks = [...tasks]
    newTasks[id-1] = job;
    setTasks(newTasks);
  }

  const handlePriority = (event) => {
    const job = {
      id: id,
      date: date,
      task: task,
      priority: event.target.outerText,
      status: status,
    }
    const newTasks = [...tasks]
    newTasks[id-1] = job;
    setTasks(newTasks);
  }

    return (
      <TaskContainer className="Tasks">
        <Stats className="stats">
          <ProgressName className="progressName">
            <div className="classState">
              { status === false ?
                <input
                  type="checkbox"
                  value={status}
                  onClick={handleStatus}
                />
                :
                <input
                  type="checkbox"
                  value={task.status}
                  onClick={handleStatus}
                  defaultChecked
                />}
            </div>
            <Label className="classLabel">
              {task}
            </Label>
          </ProgressName>
          <DueDate className="classLabel">
            {date}
            <Calendar className="calendar" src={calendar} alt="calendar"/>
          </DueDate>
        </Stats>
        <div>
          {priority==='Low' ?
            <Priority className="priority">
              <Low>Low</Low>
              <NotSelected onClick={handlePriority}>Medium</NotSelected>
              <NotSelected onClick={handlePriority}>High</NotSelected>
            </Priority>
            : (priority==='Medium' ?
            <Priority className="priority">
              <NotSelected onClick={handlePriority}>Low</NotSelected>
              <Medium>Medium</Medium>
              <NotSelected onClick={handlePriority}>High</NotSelected>
            </Priority>
            : (priority==='High'?
            <Priority className="priority">
              <NotSelected onClick={handlePriority}>Low</NotSelected>
              <NotSelected onClick={handlePriority}>Medium</NotSelected>
              <High>High</High>
            </Priority>
            :
            <Priority className="priority">
              <NotSelected onClick={handlePriority}>Low</NotSelected>
              <NotSelected onClick={handlePriority}>Medium</NotSelected>
              <NotSelected onClick={handlePriority}>High</NotSelected>
            </Priority>
             ))}
        </div>
      </TaskContainer>
    );
}

export default Task;