import {useEffect, useState} from "react";
import {getBooks} from "../../services/GoogleSearchService";
import BookCards from "./BookCards";
import SearchLoading from "./SearchLoading";

const Search = () => {

    const [bookCards, setBookCards] = useState([])
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false)



    const handleSubmit = async () => {

        setLoading(true)
        try {
            let googleSearchResponse = await getBooks(query)
            if (googleSearchResponse.data.items.length > 0) {
                setLoading(false)
                setBookCards(googleSearchResponse.data.items)
            }
            console.log(bookCards)
        } catch (error) {
            setLoading(true)
            console.log(error.response)
        }

        // getBooks(query).then(response => {
        //     if (response.data.items.length > 0) {
        //         setBookCards(response.data.items)
        //         setLoading(false)
        //     }
        // }).catch(error => {
        //     setLoading(true)
        //     console.log(error.response)
        // })
    }

    return (
        <div>
            <div>
                <input placeholder='Search book' value={query} onChange={e => setQuery(e.target.value)}/>
            </div>
            <div>
                <button onClick={handleSubmit}>Search book</button>
            </div>
            {
                loading ? <SearchLoading/> : <BookCards bookCards={bookCards}/>
            }
        </div>
    )
}

export default Search