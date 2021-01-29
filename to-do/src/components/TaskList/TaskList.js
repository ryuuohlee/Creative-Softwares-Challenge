import React, { useState, useEffect } from 'react';
import Task from '../Task/Task.js';
import TaskModal from '../TaskModal/TaskModal.js';
import Modal from 'react-modal';
import { ListContainer, AddTask } from './TaskListStyle.js';


const TaskList = (props) => {
  const { tasks, view } = props;
  const [modalIsOpen,setIsOpen] = useState(false);
  const [listView, setListView] = useState(tasks.filter(task => task.status===false));

  useEffect(()=> {
    setListView(listView);
  })

  const handleListView = (view) => {
    if(view==="Pending") {
      setListView(tasks.filter(task => task.status===false))
    }
    else {
      setListView(tasks.filter(task => task.status===true))
    }
  }


  //Modal functions
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  console.log(view)
  console.log(listView)

    return (
      <ListContainer className="listContainer">
        <div className="list" onChange={handleListView}>
          {listView.map(task => {
            return <Task
                      date={task.date}
                      priority={task.priority}
                      status={task.status}
                      task={task.task}
                      key={task.task} />
                    })
          }
        </div>
        <AddTask className="addTask">
          <button onClick={openModal}>+</button>
        </AddTask>
        <Modal
                appElement={document.getElementById('app')}
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                  overlay: {
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                  },
                  content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)'
                  }
                }}
                contentLabel="Task Entry"
              >
                <button onClick={closeModal}>X</button>
                <TaskModal />
        </Modal>
      </ListContainer>
    );
}

export default TaskList;