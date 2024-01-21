import Title from "./Title";
import Scoreboard from "./Scoreboard";

const Header = ({current, best}) => {
  return (
    <div>
      <Title/>
      <Scoreboard current={current} best={best}/>
    </div>
  );
};

export default Header;