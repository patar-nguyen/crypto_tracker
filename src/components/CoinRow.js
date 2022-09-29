import React from 'react'
import '../Coin.css';

const CoinRow = ({ name, image, symbol, price, volume, priceChange, marketCap }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='coin'>
          <img src={image} alt='crypto'/>
          <h1>{name}</h1>
          <p className='symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price.toLocaleString()}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>
          {priceChange < 0 ? (<p className='coin-percent red'>{priceChange.toFixed(2)}%</p>) : (<p className='coin-percent green'>+{priceChange.toFixed(2)}%</p>)}
          <p className='marketcap'>${marketCap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default CoinRow