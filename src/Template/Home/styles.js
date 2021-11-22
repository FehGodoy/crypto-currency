import styled from 'styled-components';

export const Section = styled.section`
margin: 10px;
padding: 20px 0px;
`;

export const Container = styled.div`
max-width:1240px;
margin: 0 auto;

@media screen and (max-width:767px){
		max-width: 100%;
        margin: inherit;
	}
`;

export const Row = styled.div`
display: flex;
flex-wrap: wrap;

@media screen and (max-width:767px){
		display: block;
	}
`;

export const BoxImage = styled.div`
width: 50%;
`;

export const BoxSearch = styled.div`
display: grid;
place-items: center;
`;

export const BoxCryptoAll = styled.div`
margin: 0 auto;

@media screen and (max-width:767px){
		width: 100%;
	}
`;

export const TitleSearch = styled.h4`
color: var(--white);
font-size: 1.8rem;
font-weight: 400;
margin: 12px 0px;
`;

export const Form = styled.form``;

export const BetterMarketCap = styled.div`

`;

export const TitleBetter = styled.h4`
    color: var(--white);
    text-align: center;
`;

export const Input = styled.input`
    background-color: var(--boxCrypto);
    color: var(--white);    
`; 