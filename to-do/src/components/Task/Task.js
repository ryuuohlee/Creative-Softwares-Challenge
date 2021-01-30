import React, { useState } from 'react';
import { TaskContainer, Low, Medium, High, Stats, Priority, ProgressName, Label, PriorityStates, NotSelected } from './TaskStyle.js';

const Task = (props) => {
  const { date, priority, status, task, tasks, setTasks } = props;
  //const [progress, setProgress] = useState(status)
  const [job, setJob] = useState({
    date: date,
    priority: priority,
    status: status,
    task: task
  })

    return (
      <TaskContainer className="Tasks">
        <Stats className="stats">
          <ProgressName className="progressName">
            <div className="classState">
              { status === false ?
                <input
                  type="checkbox"
                  value={status}
                  // onChange={handleProgress}
                />
                :
                <input
                  type="checkbox"
                  value={task.status}
                  // onChange={handleProgress}
                  defaultChecked
                />}
            </div>
            <Label className="classLabel">
              {task}
            </Label>
          </ProgressName>
          <div className="classLabel">
            {date}
          </div>
        </Stats>
        <PriorityStates>
          {priority==='Low' ?
            <Priority className="priority">
              <Low>Low</Low>
              <NotSelected>Medium</NotSelected>
              <NotSelected>High</NotSelected>
            </Priority>
            : (priority==='Medium' ?
            <Priority className="priority">
              <NotSelected>Low</NotSelected>
              <Medium>Medium</Medium>
              <NotSelected>High</NotSelected>
            </Priority>
            : (priority==='High'?
            <Priority className="priority">
              <NotSelected>Low</NotSelected>
              <NotSelected>Medium</NotSelected>
              <High>High</High>
            </Priority>
            :
            <Priority className="priority">
              <NotSelected>Low</NotSelected>
              <NotSelected>Medium</NotSelected>
              <NotSelected>High</NotSelected>
            </Priority>
             ))}
        </PriorityStates>
      </TaskContainer>
    );
}

export default Task;