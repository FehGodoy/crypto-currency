import React, {useState, useEffect} from 'react';
import * as Styled from './styles';
import axios from 'axios';
import Coins from '../../components/Coins';


function Home() {

  const [coins,setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);      
    }).catch(error => console.error(error))
  },[]);

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )


  return (
      <>              
        <Styled.SectionSearch>
            <Styled.Container>
              <Styled.Row>                                  
                  <Styled.BoxCryptoAll>                    
                  <Styled.BoxSearch>
                    <Styled.TitleSearch>
                      Digite uma moeda
                    </Styled.TitleSearch>
                    <Styled.Form>
                      <Styled.Input type="text" placeholder="Procurar.." onChange={handleChange} />
                    </Styled.Form>
                  </Styled.BoxSearch>
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
        </Styled.SectionSearch>
      </>
  )
}

export default Home;