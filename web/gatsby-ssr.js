import React from 'react';
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => {
  if(props.path == "/trading-page") return <TradingPage><TradingPage2 /></TradingPage>
  else return <Layout {...props}>{element}</Layout>
};
