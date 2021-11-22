import React from 'react';
import * as Styled from './styles';

const Coins = ({name, image, symbol, price, volume, priceChange, marketcap}) =>  {
  return (
      <>        
        <Styled.Coin>
            <Styled.BoxNameImage>
                <img src={image} alt="crypto" />
                <Styled.Title>
                    {name}
                </Styled.Title>
                <Styled.Symbol>
                    {symbol}
                </Styled.Symbol>
            </Styled.BoxNameImage>
            <Styled.BoxData>
                <Styled.Price>
                    R$ {price.toLocaleString('pt-BR', {
                        minimumFractionDigits: 3,
                        maximumFractionDigits: 3
                        })}
                </Styled.Price>
                <Styled.Volume>
                    R$ {volume.toLocaleString('pt-BR', {
                        minimumFractionDigits: 3,
                        maximumFractionDigits: 3
                        })}
                </Styled.Volume>
                {priceChange < 0 ? (
                    <Styled.Percent className="red">
                        {priceChange.toFixed(2)}%
                    </Styled.Percent>
                ) : (<Styled.Percent className="green">
                    {priceChange.toFixed(2)}%
                </Styled.Percent>)
            }
            <Styled.MarketCap>
                Mkt Cap: R$ {marketcap.toLocaleString('pt-BR', {
                            minimumFractionDigits: 3,
                            maximumFractionDigits: 3
                            })}
            </Styled.MarketCap>
                
            </Styled.BoxData>
        </Styled.Coin>            
      </>
  )
}

export default Coins;