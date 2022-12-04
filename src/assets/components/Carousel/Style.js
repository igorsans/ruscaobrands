import styled from 'styled-components'

const Car = styled.div`
@keyframes marquee {
	0% {
		left: 0;
	}
	100% {
		left: -100%;
	}
}
width: 100%;
height: 100px;
& .slide-track{
	display: flex;
	position: absolute;
	left: 0;
	
}
`
export default Car