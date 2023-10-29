import "../../ClassComponents/SearchBox/SearchBox.css";

const SearchBox = ({ placeholder, onChangeHandler, customStyle }) => {
    return (
        <input
            type="search"
            placeholder={placeholder}
            onChange={onChangeHandler}
            className={`search-box ${customStyle}`}
        />
    );
};

export default SearchBox;
