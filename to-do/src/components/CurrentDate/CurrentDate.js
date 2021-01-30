import React from 'react';
import { DateContainer, Day, Date, Year } from './CurrentDateStyle.js';


const CurrentDate = (props) => {
  const { date } = props;

    return (
      <DateContainer className="currentDate">
        <Day className="dayOfWeek">
          {date[0] === 'Mon'? 'Monday'
            : (date[0] === 'Tue'? 'Tuesday'
            : (date[0] === 'Wed'? 'Wednesday'
            : (date[0] === 'Thu'? 'Thursday'
            : (date[0] === 'Fri'? 'Friday'
            : (date[0] === 'Sat'? 'Saturday'
            : ((date[0] === 'Sun'? 'Sunday'
            : date[0]
            )))))))}
        </Day>
        <Date className="monthAndDay">
          {date[1] === 'Jan' ? 'January'
           : (date[1] === 'Feb' ? 'February'
           : (date[1] === 'Mar' ? 'March'
           : (date[1] === 'Apr' ? 'April'
           : (date[1] === 'May' ? 'May'
           : (date[1] === 'Jun' ? 'June'
           : (date[1] === 'Jul' ? 'July'
           : (date[1] === 'Aug' ? 'August'
           : (date[1] === 'Sep' ? 'September'
           : (date[1] === 'Oct' ? 'October'
           : (date[1] === 'Nov' ? 'November'
           : (date[1] === 'Dec' ? 'December'
           : date[1]
           )))))))))))} {date[2]}
        </Date>
        <Year className="year">
          {date[3]}
        </Year>
      </DateContainer>
    );
}

export default CurrentDate;
