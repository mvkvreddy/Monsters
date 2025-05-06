import "./card-list.styles.css";
import Card from "../Card/card.component";

const CardList = ({ monsters }) => (
  <div className="container">
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  </div>
);

export default CardList;
