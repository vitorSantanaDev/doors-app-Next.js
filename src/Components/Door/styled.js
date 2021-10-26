import styled from "styled-components";

export const AreaDoor = styled.div`
  width: 200px;
  height: 310px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 8px;
  position: relative;

  .frame {
    display: flex;
    flex-grow: 1;
    border-left: 5px solid brown;
    border-top: 5px solid brown;
    border-right: 5px solid brown;
    width: 90%;

    .selected {
      border-left: 5px solid yellow !important;
      border-top: 5px solid yellow !important;
      border-right: 5px solid yellow !important ;
    }
  }
`;

export const DoorElement = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  background-color: chocolate;
  flex-grow: 1;
  .number {
    font-size: 3rem;
  }

  .doorknob {
    position: absolute;
    align-self: flex-start;
    top: calc(0.45 * 310px);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: brown;
  }
`;

export const FrameDoor = styled.div``;

export const FloorDiv = styled.div`
  height: 10px;
  width: 100%;
  background-color: #ddd;
`;
