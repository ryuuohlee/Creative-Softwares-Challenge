import React from 'react';


const Task = (props) => {
  const { date, priority, status, task } = props;
    return (
      <div className="Tasks">
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
      </div>
    );
}

export default Task;