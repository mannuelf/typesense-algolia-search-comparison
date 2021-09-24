import { render, screen } from '../../utils/test-utils';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

it('Renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    {}
  );
  expect(screen.getByRole('heading')).toHaveTextContent(
    'Welcome to React news'
  );
});
