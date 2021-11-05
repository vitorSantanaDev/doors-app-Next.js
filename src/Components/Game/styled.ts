import styled from "styled-components";

export const GameSection = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .doors {
        display: flex;
        align-self: stretch;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .buttons {
        display: flex;
        justify-content: center;
        margin: 40px;

        button {
            background-color: #c0392c;
            font-size: 2rem;
            color: #FFF;
            border: none;
            padding: 10px 25px;
        }
    }

`