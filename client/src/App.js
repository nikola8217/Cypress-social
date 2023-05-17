import { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} exact/>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>
      </ThemeProvider>
      
    </>
  );
}

export default App;
