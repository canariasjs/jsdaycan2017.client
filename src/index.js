import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';


// GraphQL client
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4500/graphql'
})
const client = new ApolloClient({
  networkInterface
})


ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root')
);
registerServiceWorker();
