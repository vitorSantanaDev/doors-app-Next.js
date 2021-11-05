import { NumberInputDiv } from "./styled";

interface NumberInputProps {
  text: string,
  value: number,
  onChange: (newValue: number) => void
}

export default function NumberInput(props: NumberInputProps) {

  const decrease = () => props.onChange(props.value - 1)
  const increase = () => props.onChange(props.value + 1)

  return (
    <NumberInputDiv>
      <span className="text">{props.text}</span>
      <span className="value">{props.value}</span>
      <div className="buttons">
        <button className="btn" onClick={decrease}>-</button>
        <button className="btn" onClick={increase}>+</button>
      </div>
    </NumberInputDiv>
  )
}