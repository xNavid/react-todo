import React, { useEffect, useState } from 'react';

const Modal = (props) => {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = () => {
    props.handleChange(input);
    setInput('');
  };
  return (
    <div>
      <button
        type='button'
        class='btn newTaskModalbtn'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        + New Task
      </button>

      <div
        class='modal fade '
        id='exampleModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog modal-dialog-centered'>
          <div class='modal-content'>
            <div class='modal-body text-center'>
              <div className='modalTitle'>+ New Task</div>
              <input
                placeholder='Task Name'
                type='text'
                value={input}
                class='form-control my-5'
                id='taskInput'
                aria-describedby='emailHelp'
                onChange={handleInput}
              />

              <button
                className='btn btn-primary'
                data-bs-dismiss='modal'
                onClick={handleSubmit}
              >
                + New Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
