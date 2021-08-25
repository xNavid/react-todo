import React, { useEffect } from 'react';

const LatestTasks = (props) => {
  const tasks = props.tasks;
  const LatestTasks = tasks.slice(Math.max(tasks.length - 3, 0));
  return (
    <div className='col-lg-4 col-md-12 col-sm-12 dashBoardCardContainer'>
      <div class='card'>
        <div className='dashboardCardTitle'>Latest Created Tasks</div>
        <ul className='latestTaskListContainer'>
          {LatestTasks.map((task) => (
            <li key={`recent${task.id}`}>{task.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LatestTasks;
