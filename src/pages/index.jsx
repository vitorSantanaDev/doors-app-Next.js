import Door from "../Components/Door/Door";


export default function Home() {
  return (
    <div style={{display: "flex"}}>
      <Door selected/>
      <Door />
    </div>
  )
}
