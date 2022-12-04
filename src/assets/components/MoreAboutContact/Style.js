import styled from "styled-components"

const StyledContact = styled.div`
margin: 102px 10%;
display: flex;
justify-content: space-around;
& .main{
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
& h3 {
    font-family: var(--titulo);
    color: var(--color1);
    font-size: 70px;
}
& h4{
    font-family: var(--light);
    color: var(--color4);
    font-size: 30px;
}
& .btn{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
`
export default StyledContact