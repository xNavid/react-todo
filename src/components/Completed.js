import React, { useEffect } from 'react';

const Completed = (props) => {
  let tasks = props.tasks;
  let doneCount = 0;
  for (let task of tasks) {
    if (task.done) doneCount += 1;
  }
  return (
    <div className='col-lg-4 col-md-12 col-sm-12 dashBoardCardContainer'>
      <div class='card'>
        <div className='dashboardCardTitle'>Taks Completed</div>
        <p className='tasksCompletedNo'>{`${doneCount}/${tasks.length}`}</p>
      </div>
    </div>
  );
};

export default Completed;
