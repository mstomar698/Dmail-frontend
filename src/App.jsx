import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { Navbar } from './components/Navbar';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
