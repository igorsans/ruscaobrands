import styled from 'styled-components'

const Header = styled.header `
    position: fixed;
    width: 100%;
    top: 0;
    & .header{
        background-color: black;
        height: 122px;
        padding: 0 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    & img{
        width: 325.33px;
        height: 39.9px;
    }
    @media (max-width: 768px){
        .header {
            flex-direction: column;
            padding: 0;
            justify-content: center;
            gap: 10px;
        }
    }
`

export default Header