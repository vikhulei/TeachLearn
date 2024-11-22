import { useState } from "react"
import { Wrapper, ColorLayer,  TopWrapper, TopButton, BottomWrapper, LeftWrapper, LeftButton, CentralWrapper, InputsWrapper, Input, WordsWrapper, Word, RightWrapper, LargeButtonsWrapper, LargeButton, MarksWrapper, StudentWrapper, TutorWrapper, MarksText, MarksPercent, ImageWrapper, Image } from "./VocabularyStyle"

const Vocabulary = () => {
    let thousand = "First Thousand"
    const changeThousand = () => {
        if(thousand === "First Thpusand") {
            thousand = "Second THousand"
        } else {
            thousand = "First THousand"
        }
        return thousand
        console.log(thousand)
    }

    const [topNumbers, setTopNumbers] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])

    let leftNumbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

    const clickLeft = (e) => {
        setTopNumbers([])
        for (let i = 1; i <= 10; i++ ) {
            setTopNumbers(prev => [...prev, (Number(e.target.name) + i*10)])
        }
    }

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
                    <InputsWrapper>
                        <Input />
                    </InputsWrapper>
                    <WordsWrapper>
                        <Word>World</Word>
                    </WordsWrapper>
                </CentralWrapper>
                <RightWrapper>
                    <LargeButtonsWrapper>
                        <LargeButton onClick={changeThousand}>{thousand}</LargeButton>
                        <LargeButton>Ukrainian-English</LargeButton>
                    </LargeButtonsWrapper>
                    <MarksWrapper>
                        <StudentWrapper>
                        <MarksText>Student's MArk</MarksText>
                        <MarksPercent>72%</MarksPercent>
                        </StudentWrapper>
                        <TutorWrapper>
                        <MarksText>Tutor's MArk</MarksText>
                        <MarksPercent>64%</MarksPercent>
                        </TutorWrapper>
                    </MarksWrapper>
                </RightWrapper>
            </BottomWrapper>

        </Wrapper>
    )
}

export default Vocabulary