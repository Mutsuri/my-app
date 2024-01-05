import React, { useState, useEffect } from 'react';

export default function CurrentDate(): JSX.Element{

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
      }, []);
    
    const formatTime = (date: Date) => { 
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleDateString('en-US', { month: 'short' });
        const year = date.getFullYear();

        return (
        <div style={{ color: '#55A4A9' }}>
            <div>{`${hours}:${minutes}:${seconds}`}</div>
            <div>{`${dayOfWeek} ${day} ${month} ${year}`}</div>
        </div>
        );
    };
  
  return (
    <>
      {formatTime(currentTime)}
    </>
  );
}
