// fonts
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/600.css';
import '@fontsource/inter/500.css';

import React from 'react';
import Layout from './src/components/Layout';
import { TradingPage } from './src/styles/TradingPage';
import TradingPage2 from './src/components/trading-page';

export const wrapPageElement = ({ element, props }) => {
  console.log(element);
  console.log(props);
  console.log("yesss");
  if(props.path == "/trading-page") return <TradingPage><TradingPage2 /></TradingPage>
  else return <Layout {...props}>{element}</Layout>
  // return (
  //   {(props == "/trading-page") ? <div>Hhhh</div>
  //   : <Layout {...props}>{element}</Layout>}
  // )
};
