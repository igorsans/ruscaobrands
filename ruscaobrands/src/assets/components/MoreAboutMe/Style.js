import styled from "styled-components";

const StyledMore = styled.div`
margin: 0 10%;
display: flex;
color: var(--color1);
justify-content: flex-start;
font-family: var(--light);
gap: 100px;
& img{
    height: 550px;
}
& .content{
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 30%;
    font-size: 23px;
    inline-size: 320px;
}
& .strong{
    font-family: var(--titulo);
    font-size: 35px;
}
`
export default StyledMore