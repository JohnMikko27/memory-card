const Scoreboard = ({current, best}) => {
  return (
    <div>
      <div>Score: {current}</div>
      <div>Best Score: {best}</div>
    </div>
  );
};

export default Scoreboard;