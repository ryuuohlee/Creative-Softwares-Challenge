import React from 'react';
import Task from '../Task/Task.js';


const TaskList = (props) => {
  console.log(props)
  const { tasks } = props;
    return (
      <div className="list">
        {tasks.map(task => {
          return <Task
                    date={task.date}
                    priority={task.priority}
                    status={task.status}
                    task={task.task}
                    key={task.task} />
                  })
        }
      </div>
    );
}

export default TaskList;