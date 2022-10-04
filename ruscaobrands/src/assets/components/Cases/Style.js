import styled from "styled-components";

const CasesStyle = styled.div`
    color: white;
    margin: 0px 10%;
    display: flex;
    flex-direction: column;
    & h2{
        margin: 25px 0px;
    }
    & .cases{
        margin: 27px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;
    }
    & .casesImg{
        height: 317px;
        width: 470px;
    }
    & .seeAll{
        text-transform: uppercase;
        color: white;
        align-self: center;
        width: 256px;
        height: 75px;
        background-color: rgba(0,0,0,0%);
        border-radius: 9.29px;
        border-style: outset;
        border: 1px solid #F3F4F4;
        display: flex;
        gap: 28px;
        justify-content: center;
        align-items: center;
        font-size: 26px;
    }
`
export default CasesStyle