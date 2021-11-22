import React, {useState, useEffect} from 'react';
import * as Styled from './styles';
import logo from '../../assets/img/logo.png';
import axios from 'axios';
import logoCoin from '../../assets/img/logo-coin.webp';
import BetterCoins from '../BetterCoins';


function IphoneCase() {

    const [majorCrypto,setMajorCrypto] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=8&page=1&sparkline=false')
        .then(res => {
            setMajorCrypto(res.data);
        }).catch(error => console.error(error))
      },[]);

  return (
      <>
        <Styled.Section>
            <Styled.BoxHeader>
            <Styled.HeaderAbsolute src={logo} />    
            <Styled.Slogan> 
                Esteja sempre atualizado com as últimas notícias sobre as criptomoedas
            </Styled.Slogan>
            </Styled.BoxHeader>
            <Styled.Row>
                <Styled.Box>
                   <Styled.PoweredBox>
                        <Styled.Title>
                            Powered By
                        </Styled.Title>
                        <Styled.BoxImage src={logoCoin}/>                        
                   </Styled.PoweredBox>
                   <Styled.BoxCoins>
                       <Styled.SlideChildren>
                        {majorCrypto.map(coin => {
                                return(
                                    <BetterCoins
                                    key={coin.id} 
                                    name={coin.name} 
                                    image={coin.image} 
                                    symbol={coin.symbol}                                
                                    price={coin.current_price}
                                    priceChange={coin.price_change_percentage_24h}                                
                                    />
                                )       
                        })}
                        </Styled.SlideChildren>
                   </Styled.BoxCoins>
                </Styled.Box>
            </Styled.Row>            
        </Styled.Section>
      </>
  )
}

export default IphoneCase;