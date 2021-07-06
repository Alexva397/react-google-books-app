import axios from "axios";

const apiCalls = {
    // search google books api
    generateSearch: function(search) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
    },
    // get all saved books
    generateSaved: function() {
        return axios.get("/api/saved");
    },
    // post book to db
    saveBook: function(bookData) {
        return axios.post("/api/saved", bookData);
    },
    // delete book by id
    deleteBook: function(id) {
        return axios.delete(`/api/saved/${id}`);
    },
};


export default apiCalls;