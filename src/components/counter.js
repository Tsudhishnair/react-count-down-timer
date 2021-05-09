import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const RctDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 50%;
  margin: 3%;
  color: ${props => props.dateColor};
`;

const RcLabel = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const RcTime = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export default function Counter(props) {
  const { rootColor, dateColor, targetDateTimeVal } = props;

  const defaultTextStyles = {
    color: rootColor ? rootColor : '#38393a',
    fontWeight: '700',
  };

  const [dateTimeVal, setDateTimeVal] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  let timerInterval = useRef(null);
  useEffect(() => {
    countDown();
    return () => {
      clearInterval(timerInterval.current);
    };
  }, [targetDateTimeVal]);

  const countDown = () => {
    const targetDateTime = new Date(targetDateTimeVal).getTime();
    timerInterval = setInterval(() => {
      const currentDateTime = new Date().getTime();
      const gap = targetDateTime - currentDateTime;
      const seconds = 1000;
      const minutes = seconds * 60;
      const hours = minutes * 60;
      const days = hours * 24;
      const dayVal = Math.floor(gap / days);
      const hoursVal = Math.floor((gap % days) / hours);
      const minutesVal = Math.floor((gap % hours) / minutes);
      const secondsVal = Math.floor((gap % minutes) / seconds);
      if (gap > 0) {
        setDateTimeVal({ days: dayVal, hours: hoursVal, minutes: minutesVal, seconds: secondsVal });
      } else {
        clearInterval(timerInterval.current);
      }
    }, 1000);
  };
  return (
    <>
      <RctDateContainer dateColor={dateColor || defaultTextStyles.color}>
        <div>
          <RcTime>{dateTimeVal.days}</RcTime>
          <RcLabel>Days</RcLabel>
        </div>
        <div>
          <RcTime>{dateTimeVal.hours}</RcTime>
          <RcLabel>Hours</RcLabel>
        </div>
        <div>
          <RcTime>{dateTimeVal.minutes}</RcTime>
          <RcLabel>Minutes</RcLabel>
        </div>
        <div>
          <RcTime>{dateTimeVal.seconds}</RcTime>
          <RcLabel>Seconds</RcLabel>
        </div>
      </RctDateContainer>
    </>
  );
}
