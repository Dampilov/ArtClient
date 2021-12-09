import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import SiteHeader from './components/SiteHeader';

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
