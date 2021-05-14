import React, { useState, useEffect } from 'react';
import CurrentDate from '../../components/CurrentDate/CurrentDate.js';
import OpenTasks from '../../components/OpenTasks/OpenTasks.js';
import TaskList from '../../components/TaskList/TaskList.js'
import { AppStyle, ControlContainer, FilterContainer, Filter, Unfilter } from './AppStyles.js'


const App = () => {
  const date = new Date();
  const dateParse = date.toString().split(' ');
  const [taskList, setTasks] = useState([{id: 1, task:'task 1', priority:'Low', date:'Nov 7, 2020', status: false}, {id: 2, task:'task 2', priority:'Medium', date:'Nov 8, 2020', status: false}, {id: 3, task:'task 3', priority:'High', date:'Nov 9, 2020', status: true}])
  const openTasks = taskList.filter(task => !task.status).length;
  const [listView, setListView] = useState(false);

  useEffect(() => {
    setTasks(taskList);
  },[taskList])

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
      <FilterContainer classNamve="filterControl">
        {
          listView === false ?<ControlContainer>
              <Filter onClick={handleListView} value="Pending">Pending</Filter><Unfilter onClick={handleListView} value="Pending">Completed</Unfilter>
            </ControlContainer>
            :
            <ControlContainer>
              <Unfilter onClick={handleListView} value="Pending">Pending</Unfilter><Filter onClick={handleListView} value="Pending">Completed</Filter>
            </ControlContainer>
          }
        <TaskList tasks={taskList} view={listView} setTasks={setTasks} />
      </FilterContainer>
    </AppStyle>
  );
}

export default App;
