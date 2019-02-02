import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  
    // Gets all books
    getContent: function() {
      return axios.get("/api/content");
    },
    // Gets the content with the given id
   /* getStory: function(id) {
      return axios.get("/api/story/" + id);
    }, */
    // Deletes the book with the given id
    deleteContent: function(id) {
      return axios.delete("/api/content/" + id);
    },
    // Saves a book to the database
    saveContent: function(contentData) {
      console.log("ABCDEFG")
      return axios.post("/api/content", contentData);
    },
};
