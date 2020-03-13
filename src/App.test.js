import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
const store = createStore(
    reducers,
     {}, composeWithDevTools(applyMiddleware(reduxThunk)));

test('renders learn react link', () => {
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
