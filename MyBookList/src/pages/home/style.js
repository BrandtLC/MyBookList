import styled from 'styled-components'

const Title = styled.h1`
     color: red;
`
const BookMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
`

const BookListDiv = styled.section`
    width: 1390px;
    min-width: 1390px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: center; */
    column-gap: 15px;
    row-gap: 25px;

`
const SearchInput = styled.input`
    margin-top:  50px;
    width: 1390px;
    height: 50px;
    border-radius: 20px;
    background-color: transparent;
    padding: 20px;
    font-size: 20px;
    color: #a3a3a3;
`

const PageDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 50px;
`

const PageText = styled.p`
    color: #a3a3a3;
    cursor: pointer;
    font-size: 20px;
`
const PageTextSelected = styled.p`
    color:whitesmoke;
    cursor: pointer;
    text-decoration: underline;
    font-size: 25px;

`

const Starsdiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px
`

const ModalDiv = styled.div`
    background-color: #181818;
    padding: 20px;
    width: 500px;
    border-radius: 15px;
`

const ModalText = styled.h3`
    color: #a3a3a3;
`

const ModalButtonsDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SaveButton = styled.button`
    margin: 15px;
    align-items: center;
  background-color: #0A66C2;
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
`
const CancelButton = styled.button`
      margin: 15px;
    align-items: center;
    background: #FF4742;
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
`


export {
    Title,
    BookListDiv,
    BookMain,
    SearchInput,
    PageText,
    PageTextSelected,
    PageDiv,
    Starsdiv,
    ModalText,
    ModalDiv,
    ModalButtonsDiv,
    SaveButton,
    CancelButton
    
}