import React, {useState, useEffect} from 'react';
import * as Styled from './styles';
import axios from 'axios';
import Coins from '../../components/Coins';
import Major from '../../components/Major';
import SearchCoins from '../../components/SearchCoins';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false // 100 criptomoedas
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=6&page=1&sparkline=false // 6 principais moedas com base no market_cap


function Home() {

  const [coins,setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=4&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);      
    }).catch(error => console.error(error))
  },[]);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )


  return (
      <>        
      <Major />
        <Styled.Section id="currency">
            <Styled.Container>
              <Styled.Row>                                  
                  <Styled.BoxCryptoAll>
                    <Styled.BetterMarketCap>
                      <Styled.TitleBetter>
                        MarketCap Alto
                      </Styled.TitleBetter>
                    </Styled.BetterMarketCap>  
                  {filteredCoins.map(coin => {
                    return (
                      <Coins
                      key={coin.id} 
                      name={coin.name} 
                      image={coin.image} 
                      symbol={coin.symbol}
                      marketcap={coin.market_cap}                                         
                      price={coin.current_price}
                      priceChange={coin.price_change_percentage_24h}
                      volume={coin.total_volume}
                      />
                    )
                  })}
                  </Styled.BoxCryptoAll>                
              </Styled.Row>
            </Styled.Container>
        </Styled.Section>
        <SearchCoins />
      </>
  )
}

export default Home;