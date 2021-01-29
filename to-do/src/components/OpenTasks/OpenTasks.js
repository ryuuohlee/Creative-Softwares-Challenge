import React from 'react';
import { CountContainer, Tasks, Label } from './OpenTaskStyle.js';


const OpenTasks = (props) => {
  const { open } = props;
    return (
      <CountContainer className="openTasks">
        <Tasks className="count">
          <span>{open}</span>
        </Tasks>
        <Label className='label'>
          Open Tasks
        </Label>
      </CountContainer>
    );
}

export default OpenTasks;
