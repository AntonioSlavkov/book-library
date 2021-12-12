import axios from "axios";

const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q='
let maxResult = 40

export const getBooks = async (query) => {
   return await axios.get(baseUrl + `${query}&maxResults=${maxResult}`)
}