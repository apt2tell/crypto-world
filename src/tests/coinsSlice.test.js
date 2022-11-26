import store from '../redux/configureStore';
import { getCoinsAPI, coinDisplay } from '../redux/coins/coinsSlice';

describe('coin reducers', () => {
  it('should fetch coins', async () => {
    await store.dispatch(getCoinsAPI());
    expect(store.getState().coins.length).toEqual(100);
  });

  it('should fetch coin details', () => {
    store.dispatch(coinDisplay('BTC'));
    expect(store.getState().coins[0].display).toBe(true);
  });
});
