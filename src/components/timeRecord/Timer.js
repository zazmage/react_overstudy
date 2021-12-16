import styled from "styled-components";

const TimerNumbers = styled.div`
  span {
    font-size: 6rem;
    font-weight: 600;
  }
`;

const Timer = ({ time }) => {
  return (
    <TimerNumbers>
      <span>{("0" + Math.floor(time / 3600)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 60) % 60)).slice(-2)}:</span>
      <span>{("0" + (time % 60)).slice(-2)}</span>
    </TimerNumbers>
  );
};

export default Timer;
