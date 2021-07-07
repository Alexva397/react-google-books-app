import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import API from "../utils/API";

function Search() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);


    const searchBooks = (searchInput) => {
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

    const handleBookSave = (index) => {
        console.log(results[index])
        API.saveBook({
            title: results[index].volumeInfo.title,
            authors: results[index].volumeInfo.authors,
            description: results[index].volumeInfo.description,
            image: results[index].volumeInfo.imageLinks === undefined ? "https://via.placeholder.com/200" : results[index].volumeInfo.imageLinks.smallThumbnail,
            link: results[index].volumeInfo.infoLink,
        })
        .catch(error => console.log(error));
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
                    handleBookSave={handleBookSave}
                />
            </div>
        </>
    );
}

export default Search;