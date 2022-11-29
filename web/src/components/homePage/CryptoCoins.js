import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CryptoCoinsStyles } from '../../styles/homePage/CryptoCoinsStyles';
import { SectionTitle } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import TableStyles from '../../styles/TableStyles';
import Button from '../buttons/Button';
import { Link } from 'gatsby';
import { socialLinks } from '../../constants/socialLinks';

function CryptoCoins() {

  const [data, setData] = useState(null);

  useEffect(async () => {
    const data = await Promise.all([
      axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=inr%2Cusd`)
    ]);
    setData(data);
    console.log(data);
  }, []);

  return (
    <CryptoCoinsStyles>
      <SectionTitle>NFT Market Place - Buy, Sell & Create NFTs</SectionTitle>
      <ParagraphText>
        Create NFTs for free on Polygon_Mumbai network. <br></br> Follow the link!
      </ParagraphText>
      <Button to="https://live-nft-marketplace-3.vercel.app/" tag={Link} className="cryptoCoin__button">
        NFT MarketPlace!
      </Button>
      <ul className="cryptoCoin__socialList">
        {socialLinks.map((item) => (
          <li key={item.name}>
            <a href={item.url}>{item.icon}</a>
          </li>
        ))}
      </ul>

      {/* <SectionTitle>CryptoCoins - Live Price Update</SectionTitle>
      <ParagraphText>
        Check the listing below to get the Live Prices of
        various <br></br> Cryptocurrencies in INR (₹) and USD ($)
      </ParagraphText> */}
      {/* <TableStyles>
        <tbody>
          <tr className='tr__special'>
            <th className='data__first'>Cryptocurrency</th>
            <th>Symbol</th>
            <th>INR</th>
            <th className='data__last'>USD</th>
          </tr>
          <tr>
            <td className='data__first'>Bitcoin</td>
            <td>BTC</td>
            <td>₹{data && data[0]?.data?.bitcoin?.inr?.toLocaleString('en-IN')}</td>
            <td className='data__last'>${data && data[0]?.data.bitcoin?.usd?.toLocaleString('en-US')}</td>
          </tr>
          <tr>
            <td className='data__first'>Ethereum</td>
            <td>ETH</td>
            <td>₹{data && data[0]?.data?.ethereum?.inr?.toLocaleString('en-IN')}</td>
            <td className='data__last'>${data && data[0]?.data.ethereum?.usd?.toLocaleString('en-US')}</td>
          </tr>
        </tbody>
      </TableStyles> */}

    </CryptoCoinsStyles>
  )
}

export default CryptoCoins