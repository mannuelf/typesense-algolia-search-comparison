import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const ReduxProvider = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};

const reduxRender = (component: any, options: any) =>
  render(component, { wrapper: ReduxProvider, ...options });

export * from '@testing-library/react';
export { reduxRender as render };
