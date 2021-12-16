import { useEffect, useState } from "react";
import styled from "styled-components";
import ControlButtons from "./ControlButtons";
import Timer from "./Timer";

const StopWatchCont = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 10px;
`;

const StopWatch = ({
  props: { timeRecordData, setTimeRecordData, initialRecordState },
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  let date = new Date();

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    setTimeRecordData({
      ...timeRecordData,
      startDate: date.toLocaleDateString(),
      startTime: date.toLocaleTimeString(),
    });
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
    setTimeRecordData({
      ...timeRecordData,
      endDate: date.toLocaleDateString(),
      endTime: date.toLocaleTimeString(),
    });
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeRecordData(initialRecordState);
    setTime(0);
  };

  return (
    <StopWatchCont>
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </StopWatchCont>
  );
};

export default StopWatch;
