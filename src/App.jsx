import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { Signin } from './pages/loggedout/Signin';
import { PrivateRoute } from './components/PrivateRoute';
import { Main } from './pages/loggedin';

import { store } from './store';
import theme from './theme';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <PrivateRoute path="/mail" element={<Main />} />
            <Route path="/" element={<Signin />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
