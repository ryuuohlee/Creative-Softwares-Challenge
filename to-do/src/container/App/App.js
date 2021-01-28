import React, { useState } from 'react';
import CurrentDate from '../../components/CurrentDate/CurrentDate.js';
import OpenTasks from '../../components/OpenTasks/OpenTasks.js';
import TaskList from '../../components/TaskList/TaskList.js'


const App = () => {
  const date = new Date();
  const dateParse = date.toString().split(' ');
  const [openTasks, setOpenTasks] = useState(0)
  const [taskList, setTasks] = useState([{task:'task 1', priority:'Low', date:'Nov 7th, 2020', status: false}, {task:'task 2', priority:'Medium', date:'Nov 8th, 2020', status: false}, {task:'task 3', priority:'high', date:'Nov 9th, 2020', status: true}])

  console.log(dateParse)

    return (
      <div className="App">
        <CurrentDate date={dateParse} />
        <OpenTasks open={openTasks} />
        <TaskList tasks={taskList} />
      </div>
    );
}

export default App;
