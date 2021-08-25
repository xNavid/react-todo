import React, { useEffect, useState, Fragment } from 'react';
import Modal from './Modal';
import Completed from './Completed';
import LatestTasks from './LatestTasks';
import TaskChart from './TaskChart';

export const Dashboard = (props) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, done: false, id: tasks.length + 1 }]);
  };

  const handleCheck = (id) => {
    const taskId = Number(id.split('_')[1]);
    const newTasks = tasks.map((task) => {
      return task.id === taskId
        ? { ...task, done: task.done === true ? false : true }
        : task;
    });

    setTasks(newTasks);
  };

  const handleDelete = (id) => {
    const taskId = Number(id);
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleEdit = (id) => {};

  const noTask = () => {
    return (
      <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center noTaskContainer'>
        <div className='card'>
          <div className='card-body'>
            <div className='noTaskTitle'>You have no task.</div>
            <Modal handleChange={addTask} />
          </div>
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      {tasks.length === 0 ? (
        noTask()
      ) : (
        <div>
          <div className='row px-5'>
            <Completed tasks={tasks} />
            <LatestTasks tasks={tasks} />
            <TaskChart tasks={tasks} />
          </div>
          <div className='row px-5 mb-2'>
            <div className='col-6 taskTitle'>Tasks</div>
            <div className='col-6 addtaskBtn'>
              <Modal handleChange={addTask} />
            </div>
          </div>
          <div className='row px-5'>
            <div className='col-12'>
              <div class='card tableContainer'>
                <ul className='list-group list-group-flush'>
                  {tasks.map((task, i) => (
                    <li className='list-group-item' key={i}>
                      <div
                        className='d-inline'
                        onClick={() => handleCheck(`taskcheckbox_${task.id}`)}
                      >
                        <input
                          className='form-check-input me-2'
                          type='checkbox'
                          value=''
                          id={`taskcheckbox_${task.id}`}
                        />
                        <label
                          className={`form-check-label ${
                            task.done ? 'text-decoration-line-through' : ''
                          }`}
                          for={task.id}
                        >
                          {task.text}
                        </label>
                      </div>
                      <div className='icon-container d-flex justify-content-end float-end'>
                        <div
                          className='me-2 trash'
                          onClick={() => handleDelete(task.id)}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            class='bi bi-trash2'
                            viewBox='0 0 16 16'
                          >
                            <path d='M14 3a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2zM3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5c-1.954 0-3.69-.311-4.785-.793z' />
                          </svg>
                        </div>
                        <div className='edit' onClick={handleEdit}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            class='bi bi-pen'
                            viewBox='0 0 16 16'
                          >
                            <path d='m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z' />
                          </svg>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
