import styled from 'styled-components';


export const Coin = styled.div`
    display: flex;
    align-items: center;         
    color: var(--white);        
    position: relative;
    justify-content: space-between;
    width: 250px;
    padding: 8px;       
    

    img{
        width: 25px;
        margin-right: 12px;
    }
`;

export const BoxNameImage = styled.div`
    display: flex;
    align-items: center;            
`;

export const Title = styled.h1`
    font-size: .9rem;    
`;

export const Symbol = styled.p`
font-size: .8rem;
`;

export const BoxData = styled.div`

&::after{
    content: '';
    display: block;
    width: 1px;
    height: 20px;
    background: #1a1e26;
    position: absolute;
    right: 0;
    top: 20px;
    box-shadow: 0px 0px 15px -4px #141a2e;
}
`;

export const Aut = styled.div`
display: block;
`;

export const Price = styled.p`
font-size: .8rem;
font-weight:300
`;

export const Percent = styled.p`
font-size: .8rem;
float: right;
position: relative;

&.red{
    color: #ff0000;
    position: relative;
    &::after{
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;        
        border-top: 5px solid #f00;
        position: absolute;
        top: 8px;
        left: -15px;
    }
}

&.green{
    color: #00FF00 ;

    position: relative;
    &::after{
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;        
        border-bottom: 5px solid #00FF00;
        position: absolute;
        top: 8px;
        left: -15px;
    }
}
`;
