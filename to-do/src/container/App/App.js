import React, { useState } from 'react';
import CurrentDate from '../../components/CurrentDate/CurrentDate.js';


const App = () => {
  const date = new Date();
  const dateParse = date.toString().split(' ');

  console.log(dateParse)

    return (
      <div className="App">
        <CurrentDate date={dateParse} />
        {/*
        <OpenTasks />
        <TaskList />
        <Modal> */}
      </div>
    );
}

export default App;
