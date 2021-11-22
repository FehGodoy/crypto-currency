import styled from 'styled-components';

export const SectionSearch = styled.section`
margin: 10px;
padding: 20px 0px;

@media screen and (max-width:767px){
		margin: inherit;
	}
`;

export const Container = styled.div`
max-width:1240px;
margin: 0 auto;
`;

export const Row = styled.div`
display: flex;
flex-wrap: wrap;
`;


export const BoxSearch = styled.div`
display: grid;
place-items: center;
`;

export const BoxCryptoAll = styled.div`
margin: 0 auto;
@media screen and (max-width:767px){
		width: 100%;
        margin: 20px;
	}
`;

export const TitleSearch = styled.h4`
color: var(--white);
font-weight: 400;
margin: 12px 0px;
`;

export const Form = styled.form``;

export const TitleBetter = styled.h4`
    color: var(--white);
    text-align: center;
`;

export const Input = styled.input`
    background-color: var(--boxCrypto);
    color: var(--white);    
    box-shadow: 0px 0px 15px -4px #7b85a7;
    padding: 8px 10px;
    border-radius: 8px;
`; 