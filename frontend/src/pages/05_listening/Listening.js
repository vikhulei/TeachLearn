import { Wrapper, ImageWrapper, Image, ColorLayer, Text } from "./ListeningStyle"
import home from "../../assets/home/home1.jpg"

const Listening = () => {
  return (
    <Wrapper>
      <ColorLayer></ColorLayer>
      <ImageWrapper>
        <Image src={home} />
      </ImageWrapper>
      <Text><u>Listening</u> page is under construction</Text>
    </Wrapper>
  )
}

export default Listening