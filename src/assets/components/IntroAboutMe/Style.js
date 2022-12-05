import styled from "styled-components";

const StyledIntro = styled.div`
margin: 103px 10%;
font-family: var(--titulo);
font-size: 35px;
color: var(--color1);
& h1{
    width: 70%;
    margin-bottom: 42px;
}
& h2{
    width: 60%;
    font-size: 22px;
    color: var(--color4);
    font-family: var(--light);
}
    & span{
        color: var(--color6) ;
    }
    @media (max-width: 1440px){
        h2{
            font-size: 30px;
            width: 100%;
        }
    }
    @media (max-width: 768px){
        h1{
            width: 100%;
            font-size: 55px;
        }
    }
    @media (max-width: 425px){
        h1{
            font-size: 35px;
        }
        h2{
            font-size: 25px;
        }
    }
`
export default StyledIntro