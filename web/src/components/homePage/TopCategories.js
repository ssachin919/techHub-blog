import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import CategoryGrid from '../category/CategoryGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          category {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
    }
  `);
  const categories = data.allSanityFeatured.nodes[0].category;
  return (
    <TopCategoriesStyles>
      <SectionTitle>Top Categories</SectionTitle>
      <ParagraphText className="info">
      CoinsLive is a community of Web 3.0 enthusiasts. Explore Blockchain,
      Cryptocurrencies, NFT, Distributed Ledger and much more. 
      </ParagraphText>
      <CategoryGrid categories={categories} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;
