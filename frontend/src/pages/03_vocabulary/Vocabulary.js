import { useState, useEffect } from "react"
import { Wrapper, ColorLayer, TopWrapper, TopButton, BottomWrapper, LeftWrapper, LeftButton, CentralWrapper, InputsWrapper, Input, WordsWrapper, Word, WordSpan, TranslatSpan, RightWrapper, LargeButtonsWrapper, LargeButton, MarksWrapper, StudentWrapper, TutorWrapper, MarksText, MarksPercent, ImageWrapper, Image } from "./VocabularyStyle"
import { TenWords } from "../../components/01_config/TenWords"

const Vocabulary = () => {
    const [thousand, setThousand] = useState()
    const [leftNumbers, setLeftNumbers] = useState([])
    const [topNumbers, setTopNumbers] = useState([])
    const [language, setLanguage] = useState("Eng")
    const [showTranslation, setShowTranslation] = useState(false)
    const [tenWords, setTenWords] = useState(TenWords)

    const changeThousand = () => {
        let e
        if (thousand === "First Thousand") {
            setThousand("Second Thousand")
            localStorage.setItem("savedThousand", "Second Thousand")
            e = { target: { name: 1100 } }
        } else {
            setThousand("First Thousand")
            localStorage.setItem("savedThousand", "First Thousand")
            e = { target: { name: 100 } }
        }
        clickLeft(e)
    }

    const fillLeftButtons = (checkThousand) => {
        setLeftNumbers([])
        if (checkThousand === "First Thousand") {
            for (let i = 1; i <= 10; i++) {
                setLeftNumbers(prev => [...prev, i * 100])
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                setLeftNumbers(prev => [...prev, i * 100 + 1000])
            }
        }
    }

    const clickLeft = (e) => {
        localStorage.setItem("savedLeftNumber", Number(e.target.name))
        setTopNumbers([])
        for (let i = 1; i <= 10; i++) {
            setTopNumbers(prev => [...prev, (Number(e.target.name) + i * 10 - 100)])
        }
    }

    const clickInput = (e) => {
        console.log(e.target.id)
    }

    const clickWord = (e) => {
        setTenWords(tenWords.map(val =>
            val.id === Number(e.target.id) ? { ...val, visibility: val.visibility === "hidden" ? "visible" : "hidden" } : val
        ))
    }

    const clickLanguage = () => {
        if (language === "Eng") {
            setLanguage("Ukr")
        } else {
            setLanguage("Eng")
        }
    }

    useEffect(() => {
        let savedThousand = localStorage.getItem("savedThousand") || "First Thousand"
        setThousand(savedThousand)
        fillLeftButtons(savedThousand)
        let e = { target: { name: localStorage.getItem("savedLeftNumber") || 100 } }
        clickLeft(e)
    }, [])

    useEffect(() => {
        fillLeftButtons(thousand)
    }, [thousand])

    return (
        <Wrapper>
            <ColorLayer />
            <TopWrapper>
                {topNumbers.map((value, index) => (
                    <TopButton key={index}>{value}</TopButton>
                ))
                }
            </TopWrapper>
            <BottomWrapper>
                <LeftWrapper>
                    {leftNumbers.map((value, index) => (
                        <LeftButton key={index} name={value} onClick={clickLeft}>{value}</LeftButton>
                    ))
                    }
                </LeftWrapper>
                <CentralWrapper>
                    {tenWords.map((value, index) => (
                        <Word key={index}>
                            <Input onClick={clickInput} id={value.id} />{value.id}. <WordSpan style={{ color: value.color }} id={value.id} onClick={clickWord}> {language === "Eng" ? value.word : value.translat}</WordSpan> <TranslatSpan style={{ "visibility": value.visibility }}>{language === "Eng" ? value.translat : value.word}</TranslatSpan>
                        </Word>
                    ))}
                </CentralWrapper>
                <RightWrapper>
                    <LargeButtonsWrapper>
                        <LargeButton onClick={changeThousand}>{`Switch to ${thousand === "First Thousand" ? "Second Thosand" : "First Thousand"}`}</LargeButton>
                        <LargeButton onClick={clickLanguage}>Ukrainian-English</LargeButton>
                    </LargeButtonsWrapper>
                    <MarksWrapper>
                        <StudentWrapper>
                            <MarksText>Student's Mark</MarksText>
                            <MarksPercent>72%</MarksPercent>
                        </StudentWrapper>
                        <TutorWrapper>
                            <MarksText>Tutor's Mark</MarksText>
                            <MarksPercent>64%</MarksPercent>
                        </TutorWrapper>
                    </MarksWrapper>
                </RightWrapper>
            </BottomWrapper>

        </Wrapper>
    )
}

export default Vocabulary