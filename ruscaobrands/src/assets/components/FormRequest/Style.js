import styled from "styled-components";

const SForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 639px;
    height: 713px;
    & .twoBoxs{
        display: flex;
        gap: 15px;
        width: 105%;
    }
    & h4{
        font-size: 41px;
    }
    & .input{
        font-size: 22px;
        border-radius: 10px;
        height: 60px;
        border: 1px solid #F3F4F4 ;
        background-color: black;
        padding: 15px;
        color: #636569;
        width: 100%;
    }
`
export default SForm