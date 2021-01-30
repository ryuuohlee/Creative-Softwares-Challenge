import React, { useState } from 'react';
import { TaskContainer, Low, Medium, High, Stats, Priority, ProgressName, Label, NotSelected, Calendar, DueDate } from './TaskStyle.js';
import calendar from '../../calendar-with-spring-binder-and-date-blocks.png';

const Task = (props) => {
  const { date, priority, status, task, tasks, setTasks } = props;

    return (
      <TaskContainer className="Tasks">
        <Stats className="stats">
          <ProgressName className="progressName">
            <div className="classState">
              { status === false ?
                <input
                  type="checkbox"
                  value={status}
                  // onChange={handleProgress}
                />
                :
                <input
                  type="checkbox"
                  value={task.status}
                  // onChange={handleProgress}
                  defaultChecked
                />}
            </div>
            <Label className="classLabel">
              {task}
            </Label>
          </ProgressName>
          <DueDate className="classLabel">
            {date}
            <Calendar className="calendar" src={calendar} alt="calendar"/>
          </DueDate>
        </Stats>
        <div>
          {priority==='Low' ?
            <Priority className="priority">
              <Low>Low</Low>
              <NotSelected>Medium</NotSelected>
              <NotSelected>High</NotSelected>
            </Priority>
            : (priority==='Medium' ?
            <Priority className="priority">
              <NotSelected>Low</NotSelected>
              <Medium>Medium</Medium>
              <NotSelected>High</NotSelected>
            </Priority>
            : (priority==='High'?
            <Priority className="priority">
              <NotSelected>Low</NotSelected>
              <NotSelected>Medium</NotSelected>
              <High>High</High>
            </Priority>
            :
            <Priority className="priority">
              <NotSelected>Low</NotSelected>
              <NotSelected>Medium</NotSelected>
              <NotSelected>High</NotSelected>
            </Priority>
             ))}
        </div>
      </TaskContainer>
    );
}

export default Task;