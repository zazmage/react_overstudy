import styled from "styled-components";
import { StopWatchBtn } from "../../styles/StyledComp";

const BtnCont = styled.div`
  display: flex;
  gap: 10px;
`;

const ControlButtons = ({
  active,
  isPaused,
  handleStart,
  handleReset,
  handlePauseResume,
}) => {
  return (
    <div>
      <div>
        {active ? (
          <BtnCont>
            <StopWatchBtn onClick={handleReset}>Reset</StopWatchBtn>
            <StopWatchBtn onClick={handlePauseResume}>
              {isPaused ? "Resume" : "Pause"}
            </StopWatchBtn>
          </BtnCont>
        ) : (
          <StopWatchBtn onClick={handleStart}>Start</StopWatchBtn>
        )}
      </div>
    </div>
  );
};

export default ControlButtons;
