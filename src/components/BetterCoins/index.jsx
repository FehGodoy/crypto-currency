import React from 'react';
import * as Styled from './styles';

const Coins = ({name, image, symbol, price, priceChange}) =>  {
  return (
      <>        
        <Styled.Coin>
            <Styled.BoxNameImage>
                <img src={image} alt="crypto" />
                <Styled.Aut>
                    <Styled.Title>
                        {name}
                    </Styled.Title>
                    <Styled.Symbol>
                        {symbol}
                    </Styled.Symbol>
                </Styled.Aut>
            </Styled.BoxNameImage>
            <Styled.BoxData>
                <Styled.Price>
                    R$ {price.toLocaleString('pt-BR', {
                        minimumFractionDigits: 3,
                        maximumFractionDigits: 3
                        })}
                </Styled.Price>
                {priceChange < 0 ? (
                    <Styled.Percent className="red">
                        {priceChange.toFixed(2)}%
                    </Styled.Percent>
                ) : (<Styled.Percent className="green">
                    {priceChange.toFixed(2)}%
                </Styled.Percent>)
            }                
            </Styled.BoxData>
        </Styled.Coin>            
      </>
  )
}

export default Coins;