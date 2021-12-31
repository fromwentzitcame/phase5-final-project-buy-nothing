import styled from "styled-components";

const PostButton = styled.button`
    color: #222;
    font-size: 14px;
    background-color: #b9b9cb;
    padding: 5px 10px;
    margin: 2px;
    margin-bottom: 5px;
    letter-spacing: 1.5px;
    border: 1px solid #888888;
    border-radius: 6px;
    transition: all 0.2s ease 0s;
    &:hover {
        cursor: pointer;
        background-color: #CBB9B9;
        color: #222;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.24), 0 12px 24px 0 rgba(0,0,0,0.19);
        /* border-color: #888888; */
    }
`

export default PostButton;