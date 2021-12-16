const Timer = ({ time }) => {
  return (
    <div>
      <span>{("0" + Math.floor(time / 3600)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 60) % 60)).slice(-2)}.</span>
      <span>{("0" + (time % 60)).slice(-2)}</span>
    </div>
  );
};

export default Timer;
