import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Auth from './components/Auth';
import { AuthProvider } from './contexts/AuthContext';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    background: {
      default: '#fafafa',
    },
    text: {
      primary: '#262626',
      secondary: '#8e8e8e',
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#262626',
        },
      },
    },
  },
});

const AppContainer = styled('div')({
  backgroundColor: '#fafafa',
  minHeight: '100vh',
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <AppContainer>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </Router>
        </AppContainer>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
