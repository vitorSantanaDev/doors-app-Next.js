import styled from "styled-components"

export const NumberInputDiv = styled.div `
  display: flex;
  flex: 1;
  color: #1b1b1b;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .text {
    color: #555;
    font-size: 1.5rem;
  }

  .value {
    color: #555;
    font-size: 6rem;
  }

  .buttons {
     display: flex;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    height: 80px;
    width: 80px;
    margin: 5px;
    border: none;
    cursor: pointer;
  }
`