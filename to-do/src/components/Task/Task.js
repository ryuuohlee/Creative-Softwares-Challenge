import React from 'react';


const Task = (props) => {
  console.log(props)
  const { date, priority, status, task } = props;
    return (
      <div className="Tasks">
        <div className="classState">
        </div>
        <div className="classLabel">
          {task}
        </div>
      </div>
    );
}

export default Task;