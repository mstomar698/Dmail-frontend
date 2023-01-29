import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Signin } from './pages/loggedout/Signin';

import theme from './theme';
import { Main } from './pages/loggedin';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/mail" element={<Main />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
