import styled from 'styled-components';

export const CryptoCoinsStyles = styled.div`
  padding: 5rem 0;
  .featuredBlogs__text {
    max-width: 450px;
  }
  .cryptoCoin__button {
    margin-top: 1.5rem;
  }
  .cryptoCoin__socialList {
    margin-top: 1.5rem;
    li {
      display: inline-block;
      margin: 0 0.5rem;
      a {
        display: inline-block;
        width: 20px;
        color: var(--gray);
      }
      :hover {
        a {
          color: #733BFE;
        }
      }
    }
  }
`;
