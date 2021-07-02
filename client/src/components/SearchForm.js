

function SearchForm({ search, handleInputChange, handleFormSubmit }) {  
    return (
        <>
            <form>
                <div>
                <input 
                        type="search"
                        name="search"
                        placeholder="Search For A Book"
                        value={search}
                        onChange={handleInputChange}
                    />
                    <div>
                        <button  
                            onClick={handleFormSubmit}
                        >Search</button>
                    </div>  
                </div>
            </form>  
        </>
    );
}

export default SearchForm;