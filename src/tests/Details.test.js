import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import CoinDetails from '../components/CoinDetails';

describe('Details renders correctly', () => {
  test('Details renders Correctly', () => {
    const coinDetails = render(
      <Provider store={store}>
        <Router>
          <CoinDetails />
        </Router>
      </Provider>,
    );
    expect(coinDetails).toMatchSnapshot();
  });
});
