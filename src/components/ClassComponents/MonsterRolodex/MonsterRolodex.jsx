import { Component } from "react";
import CardList from "../CardList/CardList";
import SearchBox from "../SearchBox/SearchBox";
import "./MonsterRolodex.css";

export default class MonsterRolodex extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            filteredMonsters: [],
        };
    }

    componentDidMount = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await res.json();
        this.setState({ monsters: data, filteredMonsters: data });
    };

    handleFilterMonsters = (event) => {
        const { value } = event.target;
        const { monsters } = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(value.toLowerCase())
        );
        this.setState({ filteredMonsters });
    };

    render() {
        const { filteredMonsters } = this.state;
        const { handleFilterMonsters } = this;
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
    }
}
