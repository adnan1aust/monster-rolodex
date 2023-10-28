import { Component } from "react";
import "./SearchBox.css";

export default class SearchBox extends Component {
    render() {
        const { placeholder, customStyle, onChangeHandler } = this.props;
        return (
            <input
                type="search"
                placeholder={placeholder}
                onChange={onChangeHandler}
                className={`search-box ${customStyle}`}
            />
        );
    }
}
