import React from 'react';
import { Pages } from './Pages';
import { GlobalStyle } from './styles/global';
import "@stripe/stripe-js" 


function App() {
  return (
    <>
    
     <GlobalStyle />
     <Pages/>

    </>

  );
}

export default App
