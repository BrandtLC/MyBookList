import styled from 'styled-components'


const Title2 = styled.h2`
    color: #abc4ed;
`
const BookDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    width: 450px;
    border: solid #272727d9;
    border-width: 2px;
    border-radius: 5px;
`

const BookTitleDiv = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none; 
    
`
const BookLink = styled.a`
    text-decoration: none; 
`

const BookThemeDiv = styled.div`
    width: 100%;
    height: 30px;
    background-color: #272727;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`


const ThemeText = styled.p`
    color: #a3a3a3;
    background-color: #353535;
    /* border-radius: 100%; */
    display: inline-block;
    padding: 2px 10px;
    border-radius: 10px;
`

const InfoBookDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    background-color: #181818cf;
    width: 100%;
    height: 30px;

`

const BookInfoText = styled.p`
    color: #a3a3a3;
`

const Title = styled.h1`
     color: red;
`


const BookBody = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`
const BookImg = styled.img`
    object-fit: cover;
    width: 200px;
    /* height: 100%; */
`

const DescDiv = styled.div`
    width: 200px;
    height: 300px;
    overflow: hidden;
    &:hover {
        overflow: auto;
    }
`

const BookDesc = styled.p`
    color: #E0E0E0;
`
    
const AddButton = styled.button`
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
const RemoveButton = styled.button`
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
const BookListContent = styled.nav`
    display: none;

`
const BookListTitle= styled.span`
    
`

const BookListAside= styled.aside`
    position: fixed;
    top: 30%;
    right: 0;

    transform: rotate(180deg);
    width: 40px;
    height: 120px;
    background-color: #f0f0f0;
    border: 1px solid #000;
    border-right: none;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    writing-mode: vertical-lr;
    text-align: center;
    transition: width 0.3s ease;
    overflow: hidden;
    &:hover {
        width: 300px;
        height: 100vh;
        top: 0%;
        transform: none;
        writing-mode: horizontal-tb;
        padding: 10px;
        justify-content: flex-start;
        align-items: center;
    }


    &:hover ${BookListContent}{
        display: block;
    }

    &:hover ${BookListTitle}{
        font-weight: bold;
        margin-bottom: 20px;
    }
`


export {
    Title,
    Title2,
    BookDiv,
    BookDesc,
    DescDiv,
    BookBody,
    BookImg,
    BookTitleDiv,
    InfoBookDiv,
    BookInfoText,
    BookThemeDiv,
    ThemeText,
    BookLink,
    AddButton,
    RemoveButton,
    BookListAside,
    BookListContent,
    BookListTitle
}