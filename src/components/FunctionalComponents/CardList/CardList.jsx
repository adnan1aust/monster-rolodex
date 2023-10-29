import Card from "../Card/Card";
import "../../ClassComponents/CardList/CardList.css";
const CardList = ({ monsters }) => {
    return (
        <div className="card-list">
            {monsters.map((monster) => (
                <Card monster={monster} key={monster.id} />
            ))}
        </div>
    );
};

export default CardList;
