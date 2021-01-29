import React, { useState, useEffect } from 'react';
import CurrentDate from '../../components/CurrentDate/CurrentDate.js';
import OpenTasks from '../../components/OpenTasks/OpenTasks.js';
import TaskList from '../../components/TaskList/TaskList.js'
import { AppStyle, ControlContainer, FilterContainer, Filter } from './AppStyles.js'


const App = () => {
  const date = new Date();
  const dateParse = date.toString().split(' ');
  const [taskList, setTasks] = useState([{task:'task 1', priority:'Low', date:'Nov 7th, 2020', status: false}, {task:'task 2', priority:'Medium', date:'Nov 8th, 2020', status: false}, {task:'task 3', priority:'High', date:'Nov 9th, 2020', status: true}])
  const openTasks = taskList.filter(task => !task.status).length;
  const [listView, setListView] = useState(false);

  useEffect(() => {
    setListView(listView);
  })

  const handleListView = (event) => {
    if(event.target.outerText==="Pending") {
      setListView(false)
    }
    else {
      setListView(true)
    }
  }

    return (
      <AppStyle className="App">
        <div>
          <CurrentDate date={dateParse} />
          <OpenTasks open={openTasks} />
        </div>
        <FilterContainer className="filterControl">
          <ControlContainer>
            <Filter onClick={handleListView} value="Pending">Pending</Filter><Filter onClick={handleListView} value="Pending">Completed</Filter>
          </ControlContainer>
          <TaskList tasks={taskList} view={listView} setTasks={setTasks} />
        </FilterContainer>
      </AppStyle>
    );
}

export default App;
