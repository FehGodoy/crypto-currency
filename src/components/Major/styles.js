import styled, {keyframes} from 'styled-components';


const animationTest = keyframes`
  100% { 
    transform: translateX(-66.6666%);  
  }
`;




export const Section = styled.section`

`;

export const HeaderAbsolute = styled.img`
display: flex;
margin: 0 auto;
`;

export const BoxHeader = styled.div`
    text-align: center;
`;

export const Slogan = styled.h5`
    color: var(--white);
`;

export const Row = styled.div`
    
`;

export const PoweredBox = styled.div`
    padding: 12px;
	position: relative;

	&::after{
		content: '';
		display: block;
		width: 1px;
		height: 20px;
		background: #03050a;
		position: absolute;
		right: 0;
		top: 35px;
	}
`;

export const BoxImage = styled.img`
    max-width: 100px;
`;

export const BoxCoins = styled.div`	
	margin: auto;
	overflow:hidden;
	position: relative;
	width: 650px;


	
	&::before,
	&::after {		
		content: "";
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 2;
	}
	
	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}
	
`;

export const SlideChildren = styled.div`
        animation: ${animationTest} 25s linear infinite;
		display: flex;
		width: calc(250px * 14);	

		&:hover{
		animation-play-state: paused;
	}
`;

export const Box = styled.div`
    max-width: 750px;
    margin-top: 50px!important;
    display: flex;
    margin: 0 auto;    
	box-shadow: 0px 0px 15px -4px #7b85a7;
	border-radius: 8px;
	padding: 5px;

	@media screen and (max-width:767px){
		width: 80%;
	}
`;


export const Title = styled.h6`
    color: #fff;
    margin-bottom: 6px;
    font-weight: 400;
`;

