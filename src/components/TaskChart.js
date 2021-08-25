import React from 'react';
import PieChart from './PieChart';

const Completed = (props) => {
  let tasks = props.tasks;
  let doneCount = 0;
  for (let task of tasks) {
    if (task.done) doneCount += 1;
  }
  return (
    <div className='col-lg-4 col-md-12 col-sm-12 dashBoardCardContainer'>
      <div class='card'>
        {/* <div className='dashboardCardTitle'>Task Chart</div> */}
        <div style={{ height: '150px' }}>
          <PieChart total={tasks.length} completed={doneCount} />
        </div>
      </div>
    </div>
  );
};

export default Completed;
