import Home from './src/screen/Home';
import { ApolloProvider } from '@apollo/client';
import client from './src/service';

import ProviderRedux from './src/providerRedux';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ProviderRedux />
    </ApolloProvider>
  );
}