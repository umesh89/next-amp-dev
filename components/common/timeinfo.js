import PropTypes from 'prop-types';
import isEmpty from '@/utils/isEmpty';
import React from 'react';

function TimeInfo({dateTime,content,optionalClass="default"}) {

  const timestamp = new Date(dateTime);
  const year = timestamp.getFullYear();
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(timestamp);
  const day = timestamp.getDate();

  const hours = timestamp.getHours();
  const minutes = timestamp.getMinutes();
 // const seconds = timestamp.getSeconds();

 return (
    <>
      <div className={`post-city ${optionalClass}`}>
        {
          !isEmpty(content)
          ? <span className='update'>{content}</span> 
          : null
        }
        <span className='timeinfo'>
          {month < 10 ? '0' : ''}
 
          {month} {day < 10 ? '0' : ''}
          {day},{"  "}
          {year} {"  "}
          {hours < 10 ? '0' : ''}
          {hours}:
          {minutes < 10 ? '0' : ''}{minutes}
          {/* {seconds < 10 ? '0' : ''}{seconds} */} {"IST"}
        </span>
      </div>
    </>
  );
}

TimeInfo.propTypes ={
  optionalClass : PropTypes.string
}
export default TimeInfo;