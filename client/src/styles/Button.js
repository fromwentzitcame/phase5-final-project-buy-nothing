import styled from "styled-components";

const Button = styled.button`
    color: #222;
    font-size: 20px;
    background-color: #b9b9cb;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    border: 1px solid #888888;
    border-radius: 6px;
    transition: all 0.2s ease 0s;
    &:hover {
        cursor: pointer;
        background-color: #baccba;
        color: #222;
        box-shadow: 0 6px 10px 0 rgba(0,0,0,0.24), 0 16px 36px 0 rgba(0,0,0,0.19);
        /* border-color: #888888; */
    }
`

export default Button;