import styled from 'styled-components';

export const Coin = styled.div`
    display: flex;
    align-items: center; 
    margin: 20px 0px;    
    box-shadow:0px 0px 15px -4px #7b85a7;
    color: var(--white);
    background-color: var(--boxCrypto);
    border-radius: 8px;
    padding: 8px;

    @media screen and (max-width:767px){
        flex-direction: column;
        display: block;
	}

    img{
        width: 50px;
        margin-right: 12px;

        @media screen and (max-width:767px){
            margin: 0;
        }
    }
`;

export const BoxNameImage = styled.div`
    display: flex;
    align-items: center;    
    width: 280px;
    margin-right: 20px;

    @media screen and (max-width:767px){
        width: auto;
        flex-direction: column;
        display: grid;
        place-items: center;
        margin: 0;
    }
`;

export const Title = styled.h1`
    font-size: 1.2rem;
    min-width: 150px;

    @media screen and (max-width:767px){
            text-align:center;
        }
`;

export const Symbol = styled.p`
width: 80px;

@media screen and (max-width:767px){
            text-align: center;
        }
`;

export const BoxData = styled.div`
display: flex;

@media screen and (max-width:767px){
    flex-direction: column;
    text-align: center;
    }
`;

export const Price = styled.p`
width: 150px;

@media screen and (max-width:767px){
    padding-top: 10px;
    position: relative;
    width: 100%;
    }

`;

export const Volume = styled.p`
width: 220px;
text-align: center;

@media screen and (max-width:767px){
    padding-top: 10px;
    position: relative;
    width: 100%;
    }
`;

export const Percent = styled.p`

width: 80px;

@media screen and (max-width:767px){
    padding-top: 10px;
    position: relative;
    width: 100%;
    }

&.red{
    color: #ff0000;
}

&.green{
    color: #00FF00 ;
}
`;

export const MarketCap = styled.p`
width: 280px;
text-align: center;

@media screen and (max-width:767px){
    padding-top: 10px;
    position: relative;
    width: 100%;
    }
`;