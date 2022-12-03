import styled from "styled-components";

const StyledMore = styled.div`
margin: 0 10%;
display: flex;
gap: 72px;
color: var(--color1);
font-family: var(--light);
& img{
    height: 450px;
    width: 40%;
}
& .content{
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 200px;
    font-size: 18px;
}
& .strong{
    font-family: var(--titulo);
    font-size: 23px;
}
`
export default StyledMore