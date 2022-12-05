import styled from "styled-components"

const StyledContact = styled.div`
margin: 102px 10%;
display: flex;
justify-content: space-between;
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
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
}
@media (max-width: 768px){
    flex-direction: column;
    .main{
        width: 100%;
    }
    h3{
        text-align: center;
        font-size: 50px;
    }
    h4{
        margin-bottom: 25px;
    }
}
`
export default StyledContact