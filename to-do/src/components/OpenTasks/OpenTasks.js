import React from 'react';


const OpenTasks = (props) => {
  const { open } = props;
  console.log(props)
    return (
      <div className="openTasks">
        <div className="count">
          {open}
        </div>
        <div className='label'>
          Tasks
        </div>
      </div>
    );
}

export default OpenTasks;
