import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          CoinsLive is a community of Web 3.0 enthusiasts. Explore Blockchain,
          Cryptocurrencies, NFT, Distributed Ledger and much more. Web 3.0 enables
          creators to actually own their content over internet! Start Exploring
          Now! <br /> © CoinsLive - Crypto Decrypted!
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          © CoinsLive - Crypto Decrypted! {new Date().getFullYear()}. All rights
          reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
