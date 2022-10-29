import styled from "styled-components";

const SContact = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0 10%;
    & .infoContact{
        width: 50%;
    }
    & h3{
        font-family: var(--titulo);
        color: var(--color3);
        font-size: 80px;
    }
    & p{
        margin: 25px 0;
        font-family: var(--corrido);
        font-size: 30px;
        line-height: 1.2;
    }
    & a{
        color: #636569;
    }
`
export default SContact