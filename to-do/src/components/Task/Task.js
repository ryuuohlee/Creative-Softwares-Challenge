import React from 'react';
import { TaskContainer, Low, Medium, High } from './TaskStyle.js';

const Task = (props) => {
  const { date, priority, status, task } = props;
    return (
      <TaskContainer className="Tasks">
        <div className="stats">
          <div className="classState">
            <input
              type="checkbox"
            />
          </div>
          <div className="classLabel">
            {task}
          </div>
          <div className="classLabel">
            {date}
          </div>
        </div>
        <div>
          {priority==='Low' ?
            <div>
              <Low>Low</Low>
              <p>Medium</p>
              <p>High</p>
            </div>
            : (priority==='Medium' ?
            <div>
              <p>Low</p>
              <Medium>Medium</Medium>
              <p>High</p>
            </div>
            : (priority==='High'?
            <div>
              <p>Low</p>
              <p>Medium</p>
              <High>High</High>
            </div>
            :
            <div>
              <p>Low</p>
              <p>Medium</p>
              <p>High</p>
            </div>
             ))}
        </div>
      </TaskContainer>
    );
}

export default Task;