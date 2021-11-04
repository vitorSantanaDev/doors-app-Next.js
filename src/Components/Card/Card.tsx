import { CardDiv } from "./styled";

interface CardProps {
  bgColor?: String
  children?: any
}

export default function Card(props: CardProps) {
  return (
    <>
      <CardDiv style={{
        backgroundColor: props.bgColor ?? "#FFF"
      }}>
        {props.children}
      </CardDiv>
    </>
  )
}