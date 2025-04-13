import  { BookListDiv, BookMain, SearchInput, PageText,
    PageTextSelected, PageDiv, Starsdiv, ModalText, ModalDiv, ModalButtonsDiv,SaveButton,
    CancelButton} from './style'
import BookBox from '../../components/bookBox'
import BookList from '../../components/bookList'
import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Modal from "react-modal"
import './modalStyle.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

Modal.setAppElement("#root")
export default function Home() {
    const [searchText, setSearchText] = useState("")
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(100000)
    const [maxResult] = useState(21)
    const [modalIsOpened, setModalIsOpened] = useState(false)
    const [selectedBook, setSelectedBook] = useState()
    const [userBooks, setUserBooks] = useState()
    const [rate, setRate] = useState()
    const [buttonSavarEnable, setButtonSavarEnable] = useState(false)

    const { data: bookListData, isLoading: bookListIsLoading , isFetching: bookListIsFetching, refetch: bookListRefetch } = useQuery({
        queryKey: ['testeData'],
        queryFn: async () => {
            const { data } = await axios.get(
                // 'http://localhost:5000/api/read/teste'
                `https://www.googleapis.com/books/v1/volumes?${searchText == "" ? "q=*" : `q=${searchText}`}&key=${apiKey}&maxResults=${maxResult}&startIndex=${maxResult * (page - 1)}`
            )

            
            return data
        }
    })

    const useRetrieveBook= (bookId) => {
        return useQuery({
            queryKey: ['BookData'],
            queryFn: async () => {
                const { data } = await axios.get(
                    `https://www.googleapis.com/books/v1/volumes?5unrAgAAQBAJ&key=${apiKey}`
                )
    
                
                return data
            }
        })
    }

    const useDeleteBookByUser = () => {
        return useMutation({
          mutationFn: async ({ userId, bookId }) => {
            const { data } = await axios.delete(`http://localhost:5000/api/read/${userId}/${bookId}`);
            return data;
          },
        });
      };
    
      const {isLoading: isLoadingDelete,
        isSuccess: isSuccessDelete,
        isError: isErrorDelete,
        error: errorDelete,
        mutate: deleteBook } = useDeleteBookByUser();

   const usePostToBookList = () => {
        return useMutation({
        manual: true,
        mutationFn: async ({rateParam, selectedBookParam}) => {

            
            const{ data } = await axios.post(
                'http://localhost:5000/api/read' , {
                    user_id: 1,
                    book_id: selectedBookParam,
                    rate: rateParam,
                }
            )
            return data
        }
    })
   }

   const useGetBooksByUser = (userId) => {
    return useQuery({
      queryKey: ['booksByUser', userId],
      queryFn: async () => {
        const { data } = await axios.get(`http://localhost:5000/api/read/${userId}`);
        setUserBooks(data)
        
        return data;
      },
    });
  };

  

   const postResult = usePostToBookList()
   const { data: userBooksData, isLoading:  userBooksIsLoading, refetch:  userBooksRefetch, isFetching: userBooksIsFetching} = useGetBooksByUser(1)
    
   useEffect(() => {
    bookListIsFetching == true && userBooksRefetch()
    
}, [bookListIsFetching, userBooksRefetch])

    useEffect(() => {
        bookListRefetch()
        userBooksRefetch()

    }, [searchText, page, bookListRefetch])

    useEffect(() => {
        if(selectedBook) {
            openModal()
        }
        
    }, [modalIsOpened, selectedBook])

    useEffect(() => {
        if(!bookListIsLoading) {
            setMaxPage(Math.ceil(bookListData.totalItems/maxResult))
        }
    }, [bookListData, maxResult])

    useEffect(() => {
        if(rate) {
            setButtonSavarEnable(true)
        }
    }, [rate])

    const apiKey = 'AIzaSyAhSYXRHwkV39V7nrc6g8-ffXJqnr6ET0o'
    // const loadData = () => {
        
    // }

    const generateBookList = () => {
        return bookListData.items.map(book =>  {

            const props = {
                book,
                userBooksData: userBooks,
                setSelectedBook,
                setRate,
                deleteBook,
                userBooksRefetch
            }

            
            return (<BookBox key={book.id} { ...props }/>)
        })

    }

    const generateMyBookList = () => {

        const props = {
            userBooks: userBooksData.items,
            useRetrieveBook
        }  

        return (<BookList { ...props }/>)
    }

    const generatePageList = () => {
        let pageList = []
        if(page <= 4) {
            for(let i = 1; i <= 7; i++) {
                pageList.push(i)
            }

            return pageList
        }
        if(page <= maxPage - 4) {
            for(let i = page - 3; i <= page + 3; i++) {
                pageList.push(i)
            }
            return pageList
        }

        for(let i = maxPage - 7; i <= maxPage; i++) {
            pageList.push(i)
        }
        return pageList
    }

    const handleTextChange = (value) => {
        setPage(1)
        setSearchText(value)
    }

    const handlePageChange = (event) => {
        setPage(parseInt(event.target.id))
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })

    }

    const openModal = () => {
        setModalIsOpened(true)
    }

    const closeModal = () => {
        setModalIsOpened(false)
        setSelectedBook(null)
        setRate()
    }

    const generateStars = () => {
        let ListStars = []

        for(let i = 1; i <= 5; i++) {
            if(i<= rate) {
                ListStars.push(<StarIcon className='star' id={i} onClick={() => setRate(i)}/>)
                continue
            }
            ListStars.push(<StarBorderIcon className='starBorder' id={i} onClick={() => setRate(i)}/>)

            
            
        }
        
        
        return ListStars
    }

    return (
        <BookMain>

            <SearchInput type="text" placeholder='Busca' value={searchText} onChange={(e) => handleTextChange(e.target.value)} />
            {bookListIsLoading || userBooksIsLoading ? (<p>Loading</p>) : (<BookListDiv>{generateBookList()}</BookListDiv>)}

            {!bookListIsLoading && (
            <PageDiv>
                <PageText onClick={(() => {
                    window.scrollTo({
                        top:0,
                        behavior: 'smooth'
                    })
                    setPage(1)
                    })}>{'<<' }</PageText >
                <PageText onClick={(() => {
                    if(page != 1) {
                        setPage(page -1)
                        window.scrollTo({
                            top:0,
                            behavior: 'smooth'
                        })
                    }
                })}>{'<'}</PageText>


                {!bookListIsLoading && generatePageList().map(c => {
                    if(c == page) {
                        return (<PageTextSelected key={c} >{c}</PageTextSelected>)
                    }
                    return (<PageText key={c} id={c} onClick={((e) => handlePageChange(e))}>{c}</PageText>)
                })}
                

                <PageText onClick={(() => {
                    if(page != maxPage) {
                        setPage(page +1)
                        window.scrollTo({
                            top:0,
                            behavior: 'smooth'
                        })
                    }
                })}>{'>'}</PageText>

                <PageText onClick={(() => {
                    window.scrollTo({
                        top:0,
                        behavior: 'smooth'
                    })
                    setPage(maxPage)
                    })}>{'>>' }</PageText >
            </PageDiv>
            )}

            <Modal
            isOpen={modalIsOpened}
            onRequestClose={closeModal}
            contentLabel="Adicionar Livro"
            overlayClassName="modal-overlay"
            className='modal-content'
            ariaHideApp={false}
            > 
                <ModalDiv>
                    <ModalText>Qual nota você dá para esse livro?</ModalText>
                    <Starsdiv>
                        {generateStars(1)}

                    </Starsdiv>
                    <ModalButtonsDiv>
                        <CancelButton onClick={() => closeModal()}>Cancelar</CancelButton>
                        <SaveButton disabled={!buttonSavarEnable} onClick= {async () => {
                            const rateParam = rate
                            const selectedBookParam = selectedBook

                            await postResult.mutate({rateParam, selectedBookParam})
                            bookListRefetch()
                            userBooksRefetch()
                            closeModal()
                        }}>Salvar</SaveButton>
                    </ModalButtonsDiv>

                </ModalDiv>

            </Modal>

        </BookMain>
    )
}

