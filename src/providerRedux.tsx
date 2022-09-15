import Home from './screen/Home';

import { Provider } from 'react-redux';

import store from './store';

export default function ProviderRedux() {
  return (
      <Provider store={store}>
        <Home />
      </Provider>
  );
}