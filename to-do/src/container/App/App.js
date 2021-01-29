import React, { useState, useEffect } from 'react';
import CurrentDate from '../../components/CurrentDate/CurrentDate.js';
import OpenTasks from '../../components/OpenTasks/OpenTasks.js';
import TaskList from '../../components/TaskList/TaskList.js'
import { AppStyle, Filter } from './AppStyles.js'


const App = () => {
  const date = new Date();
  const dateParse = date.toString().split(' ');
  const [taskList, setTasks] = useState([{task:'task 1', priority:'Low', date:'Nov 7th, 2020', status: false}, {task:'task 2', priority:'Medium', date:'Nov 8th, 2020', status: false}, {task:'task 3', priority:'high', date:'Nov 9th, 2020', status: true}])
  const [view, setView] = useState('Pending');
  const openTasks = taskList.filter(task => !task.status).length;

  useEffect(() => {
    setView(view);
  })

  const handleView = (event) => {
    setView(event.target.outerText);
  }

    return (
      <AppStyle className="App">
        <div className="filterControl">
          <Filter onClick={handleView} value="Pending">Pending</Filter><Filter onClick={handleView} value="Pending">Completed</Filter>
          <div>
            <TaskList tasks={taskList} view={view}/>
          </div>
        </div>
        <div>
          <CurrentDate date={dateParse} />
          <OpenTasks open={openTasks} />
        </div>
      </AppStyle>
    );
}

export default App;
