import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";

const blockOneHeight = "600px"
const macBlockOneHeight = "80vh"



const ContentWrapper = styled.div`
    position: relative;
    top: ${sizes.headerheight};
    margin: 0 ${sizes.marginsides};
    z-index:100;
    z-index:0;
`
    
const BlockOneWrapper = styled.div`
    position: relative;
    height: ${blockOneHeight};
    // max-height: ${macBlockOneHeight};
    // background-color: darkred;
    // border: solid 5px black;
`

const ImageWrapper = styled.div`
    position: fixed;
    top: ${sizes.headerheight};
    left: ${sizes.marginsides};
    right: ${sizes.marginsides};
    height: ${blockOneHeight};
    z-index: -10;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const SvgWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: ${blockOneHeight};
`

const TextButtonsWrapper = styled.div`
    position: absolute;
    width: 600px;
    padding: 30px 0;
    right: 40px;
    top: 0;
    bottom: 0;
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
    padding: 100px;
    background-color: #F5F5F5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
`

const BlockTwoGroup = styled.div`
width: 300px;
height: 700px;
background-color: darkblue;
`
const BlockTwoImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 70%;
    left: -20px;
`

const BlockTwoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export { Image, ContentWrapper, BlockOneWrapper, TextButtonsWrapper, Header, Subheader, ButtonsWrapper, SignUp, LogIn,  BlockTwoWrapper, ImageWrapper, SvgWrapper, BlockTwoGroup, BlockTwoImageWrapper, BlockTwoImage,  }