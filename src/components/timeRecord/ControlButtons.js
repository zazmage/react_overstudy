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
          <div>
            <div onClick={handleReset}>Reset</div>
            <div onClick={handlePauseResume}>
              {isPaused ? "Resume" : "Pause"}
            </div>
          </div>
        ) : (
          <div onClick={handleStart}>Start</div>
        )}
      </div>
    </div>
  );
};

export default ControlButtons;
