import Title from "./Title";
import Scoreboard from "./Scoreboard";
import "../styles/Header.css";

const Header = ({current, best}) => {
  return (
    <div className="header">
      <Title/>
      <Scoreboard current={current} best={best}/>
    </div>
  );
};

export default Header;