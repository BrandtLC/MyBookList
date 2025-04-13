import  { Title2, BookDiv, BookDesc, DescDiv, BookBody,BookImg, BookTitleDiv, InfoBookDiv, BookInfoText, BookThemeDiv,
    ThemeText, BookLink, AddButton, RemoveButton} from './style'
import PropTypes from 'prop-types';

export default function BookBox(props) {
    const id = props.book.id

    let title = props.book.volumeInfo.title
    title == null ? "" : title

    let thumbLink = ""
    try {
        thumbLink = props.book.volumeInfo.imageLinks.thumbnail
    } catch (error) {
        thumbLink = ""
    }
    let description = props.book.volumeInfo.description
    description == null ? "" : description

    let pgCount = props.book.volumeInfo.pageCount
    pgCount == null ? 0 : pgCount

    let pubDate = props.book.volumeInfo.publishedDate
    pubDate == null ? null : pubDate

    let  categories = props.book.volumeInfo.categories == null ? [] : props.book.volumeInfo.categories
    categories == null ? "" : categories

    let author
    try {
        author = props.book.volumeInfo.authors[0]
    } catch (error) {
        author = ""
    }

    const googleLink = props.book.volumeInfo.infoLink

    const getThemeList = () => {
        return categories.map(c => (<ThemeText key={c}>{c}</ThemeText>))
    }

    const checkBooks = () => {
        const bookListIds = props.userBooksData.map((c) => c.book_id);
        
        return bookListIds.includes(id);
    }

    return (
        <BookDiv>
            <BookLink href={googleLink}>
                <BookTitleDiv>
                    <Title2>{title}</Title2>


                </BookTitleDiv>

            </BookLink>
                

                <InfoBookDiv>
                    <BookInfoText>
                    {author != "" && author}

                    </BookInfoText>

                    <BookInfoText>
                        {pubDate}

                    </BookInfoText>
                    <BookInfoText>
                        p{pgCount}

                    </BookInfoText>

                </InfoBookDiv>

                <BookThemeDiv>
                    {getThemeList()}

                </BookThemeDiv>

                <BookBody>
                    <BookLink href={googleLink}>
                        <BookImg src={thumbLink} alt="capa livro" />

                    </BookLink>

                    <DescDiv>
                        <BookDesc>{description}</BookDesc>

                    </DescDiv>
                    
                </BookBody>
                {checkBooks() ? (<RemoveButton onClick={() => props.deleteBook({userId:1, bookId:id}, {onSuccess: () =>{props.userBooksRefetch()}
  })}>Remover de Lidos</RemoveButton>) : (<AddButton onClick={() => props.setSelectedBook(id)}>Adiconar a Lidos</AddButton>)}
                
            </BookDiv>
    )
} 

BookBox.propTypes = {
    book: PropTypes.object,
    setSelectedBook: PropTypes.func,
    userBooksData: PropTypes.func,
    deleteBook: PropTypes.func,
    userBooksRefetch : PropTypes.func

}