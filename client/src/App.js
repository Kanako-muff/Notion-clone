import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthLayout from './components/layout/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { blue } from '@mui/material/colors';

function App() {

  const theme = createTheme({
    palette: {primary: blue},
  });
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <Routes>
            <Route path='/' element={<AuthLayout />} >
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
            </Route>
          </Routes>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
