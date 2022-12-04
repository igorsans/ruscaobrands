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
`

export default Header