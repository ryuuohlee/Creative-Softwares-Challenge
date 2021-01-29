import React from 'react';


const CurrentDate = (props) => {
  const { date } = props;
    return (
      <div className="currentDate">
        <div className="dayOfWeek">
          {date[0]}
        </div>
        <div className="monthAndDay">
          {date[1]}, {date[2]}
        </div>
        <div className="year">
          {date[3]}
        </div>
      </div>
    );
}

export default CurrentDate;
