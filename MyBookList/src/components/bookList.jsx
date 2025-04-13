import { useState, useEffect } from 'react'
import { BookListAside, BookListContent, BookListTitle } from './style'
import { PropTypes } from 'prop-types';
import axios from 'axios';

export default function BookList({
    userBooks
}) {
    const apiKey = 'AIzaSyAhSYXRHwkV39V7nrc6g8-ffXJqnr6ET0o'
    
    const [isLoading, setIsLoading] = useState(true)
    const [books, setBooks] = useState([])


    useEffect(() => {
        setIsLoading(true)

        //console.log("teste");
        //console.log(userBooks);
        

        fetchAllBooks()

    }, [userBooks])

    useEffect(() => {
        setIsLoading(false)
        //console.log(books);
        

    }, [books])

    const fetchBook = async (bookId) => {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${apiKey}`)

          setBooks([...books, response.data])

    }

    const fetchAllBooks = async () => {
        
        const requests = userBooks.map(c => axios.get(
            `https://www.googleapis.com/books/v1/volumes/${c.id}?key=${apiKey}`))

        const responses = await Promise.all(requests)
        const responseBooks = responses.map(c => c.data)
        console.log( "teste")
        console.log(responseBooks);
        
        setBooks(responseBooks)
    }


    return (
        <BookListAside>
            <BookListTitle>Meus Livros</BookListTitle>
            <BookListContent>
                <p>teste</p>
            </BookListContent>
        </BookListAside>
    )
}

BookList.propTypes = {
    userBooks: PropTypes.array,
}