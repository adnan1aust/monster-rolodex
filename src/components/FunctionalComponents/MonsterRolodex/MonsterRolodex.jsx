import CardList from "../CardList/CardList";
import SearchBox from "../SearchBox/SearchBox";
import { useState, useEffect } from "react";
import "../../ClassComponents/MonsterRolodex/MonsterRolodex.css";

const MonsterRolodex = () => {
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, serFilteredMonsters] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/users`
            );
            const data = await res.json();
            setMonsters(data);
            serFilteredMonsters(data);
        };
        getData();
    }, []);

    const handleFilterMonsters = (event) => {
        const { value } = event.target;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(value.toLowerCase())
        );
        serFilteredMonsters(filteredMonsters);
    };
    return (
        <div>
            <h1 className="app-title">Monster Rolodex</h1>
            <SearchBox
                onChangeHandler={handleFilterMonsters}
                placeholder="search monsters"
                customStyle="monsters-search-box"
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
};

export default MonsterRolodex;
