import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import API from "../utils/API";

function Search() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);


    const searchBooks = async (searchInput) => {
        API.generateSearch(searchInput)
            .then(res => {
                console.log(res.data.items)
                setResults(res.data.items)            
            })
            .catch(err => console.log(err));
    }

    const handleInputChange = e => {
        setSearch(e.target.value);
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(search);
        setSearch(e.target.value);
        searchBooks(search);
    }



    return (
        <>
            <SearchForm 
                search={search}
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                setResults={setResults}
            />
            <div>
                <Results 
                    results={results}
                />
            </div>
        </>
    );
}

export default Search;