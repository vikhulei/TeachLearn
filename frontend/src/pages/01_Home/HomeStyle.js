import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";
import home from "../../assets/home/home.jpg"



const FirstWrapper = styled.div`
    position: fixed; 
    top: 115px;
    width: 100vw;
    height: 100vh;
`

const ImageWrapper = styled.div`
    position: fixed;
    top: 115px;
    left: ${sizes.marginsides};
    right: ${sizes.marginsides};
    height: 700px;
    z-index: -10;

`
   
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const ContentWrapper = styled.div`
    position: relative;
    top: 115px;
    margin: 0 ${sizes.marginsides};
`
    
const FirstBlock = styled.div`
    position: relative;
    height: 700px;
    max-height: 90vh;
    z-index: 10;
`

const TextButtonsWrapper = styled.div`
    position: absolute;
    width: 600px;
    top: 7vh;
    bottom: 7vh;
    right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;;
    color: white;
    text-align: right;
    z-index: 50;
`
    
    const Header = styled.div`
    font-size: 3rem;
    font-weight: 900;
`

const Subheader = styled.div`
    font-size: 1.4rem;
    width: 400px;
    line-height: 2rem;
`

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const SignUp = styled.button`
    width: 240px;
    height: 70px;
    font-size: 1.1rem;
    color: white;
    border: #D34E4E solid 4px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0)
`

const LogIn = styled(SignUp)`
    border: #5B4ED3 solid 1px;
`

const BlockTwoWrapper = styled.div`
    position: relative;
    height: 1500px;
    background-color: #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`
const BlockTwoImageOne = styled.img`
    width: 300px;
    object-fit: cover;
`

const BlockTwoContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: yellow;
    gap: 100px;
`

const BlockTwoGroupOne = styled.div`
    width: 300px;
    height: 500px;
    background-color: darkblue;
`
const BlockTwoGroupTwo = styled.div`
    width: 300px;
    height: 500px;
    background-color: darkgreen;
`
const BlockTwoGroupThree = styled.div`
    width: 300px;
    height: 500px;
    background-color: darkred;
`

export { FirstWrapper, Image, ContentWrapper, FirstBlock, TextButtonsWrapper, Header, Subheader, ButtonsWrapper, SignUp, LogIn,  BlockTwoWrapper, ImageWrapper, BlockTwoContentWrapper, BlockTwoGroupOne, BlockTwoGroupTwo, BlockTwoGroupThree, BlockTwoImageOne,  }

