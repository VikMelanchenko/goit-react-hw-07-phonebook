import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Container from './components/Container/Container';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Container>
        <App />
      </Container>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
