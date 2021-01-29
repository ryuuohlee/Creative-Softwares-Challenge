import React from 'react';
import { TaskContainer } from './TaskStyle.js';

const Task = (props) => {
  const { date, priority, status, task } = props;
    return (
      <TaskContainer className="Tasks">
        <input
          type="checkbox"
        />
        <div className="classState">
        </div>
        <div className="classLabel">
          {task}
        </div>
        <div className="classLabel">
          {date}
        </div>
      </TaskContainer>
    );
}

export default Task;