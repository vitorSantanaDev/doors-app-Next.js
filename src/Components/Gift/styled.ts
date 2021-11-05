import styled from "styled-components";

export const GiftElment = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cover {
    width: 100px;
    height: 25px;
    background-color: #7aa944;
  }

  .body {
    width: 90px;
    height: 60px;
    background-color: #5c7e32;
  }

  .ribbon1 {
    position: absolute;
    background-color: red;
    width: 15px;
    height: 85px;
  }

  .ribbon2 {
    position: absolute;
    top: 40px;
    background-color: red;
    width: 90px;
    height: 15px;
  }
`;
