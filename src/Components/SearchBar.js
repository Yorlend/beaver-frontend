import React from "react";
import PropTypes from 'prop-types';

const SearchBar = ({ keyword, setKeyword }) => {
    console.log(setKeyword)
    console.log(keyword)
    const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };
    return (
        <input
            style={BarStyling}
            key="random1"
            value={keyword}
            placeholder={"search datasets"}
            onChange={(e) => {
                console.log(e.target.value)
                setKeyword(e.target.value)
            }}
        />
    );
}

SearchBar.propTypes = {
    keyword: PropTypes.string,
    setKeyword: PropTypes.any
}

export default SearchBar;