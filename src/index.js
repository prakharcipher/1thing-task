import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from './reducers';

// const store = createStore(reducer);

ReactDOM.render(
  // <Provider store={store}>
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  // </Provider>,
  document.getElementById('root')
);
