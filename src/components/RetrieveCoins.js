import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinRow from './CoinRow';
import '../Coin.css';
const RetrieveCoins = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
    })
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return(
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Crypto Tracker</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
        <div className='coin-title'>
          <h2 className='coin-name'>Name</h2>
          <h2 className='coin-symbol'>Symbol</h2>
          <h2 className='coin-pricetitle'>Price</h2>
          <h2 className='coin-volumetitle'>Volume</h2>
          <h2 className='coin-change'>24 hr</h2>
          <h2 className='coin-marketcaptitle'>Market Cap</h2>
        </div>
      </div>
      {filteredCoins.map(coin => {
        return (
          <CoinRow
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default RetrieveCoins