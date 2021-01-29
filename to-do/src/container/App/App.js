import React, { useState } from 'react';
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
  const [listView, setListView] = useState(taskList.filter(task => task.status===false));

  const handleListView = (event) => {
    console.log(event);
    if(event.target.outerText==="Pending") {
      setListView(taskList.filter(task => task.status===false))
    }
    else {
      setListView(taskList.filter(task => task.status===true))
    }
  }

    return (
      <AppStyle className="App">
        <div className="filterControl">
          <Filter onClick={handleListView}>Pending</Filter><Filter onClick={handleListView}>Completed</Filter>
          <div>
            <TaskList tasks={listView} />
          </div>
        </div>
        <div>
          <CurrentDate date={dateParse} />
        </div>
        <div>
          <OpenTasks open={openTasks} />
        </div>
      </AppStyle>
    );
}

export default App;
