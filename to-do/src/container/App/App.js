import React, { useState } from 'react';
import CurrentDate from '../../components/CurrentDate/CurrentDate.js';
import OpenTasks from '../../components/OpenTasks/OpenTasks.js';


const App = () => {
  const date = new Date();
  const dateParse = date.toString().split(' ');
  const [openTasks, setOpenTasks] = useState(0)

  console.log(dateParse)

    return (
      <div className="App">
        <CurrentDate date={dateParse} />
        <OpenTasks open={openTasks} />
        {/*
        <TaskList />
        <Modal> */}
      </div>
    );
}

export default App;
