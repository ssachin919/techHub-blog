import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';
import { socialLinks } from '../../constants/socialLinks';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Explore VideoUploader<br/> Built on Web3.0 Backend</h1>
            <ParagraphText className="hero__text">
            CoinsLive is a community of Web 3.0 enthusiasts. Explore Blockchain,
            Cryptocurrencies, NFT, Distributed Ledger and much more. 
            </ParagraphText>
            <Button to="https://video-uploader-nzpjd0ae1-ssachin919.vercel.app/" tag={Link} className="hero__button">
              VideoUploader 3.0
            </Button>
            <ul className="hero__socialList">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.url}>{item.icon}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../../assets/cryptocurrency matrix neo-1668975418528.jpeg"
              alt="blockchain"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
