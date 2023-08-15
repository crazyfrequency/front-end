import logo from './logo.svg';
import './App.css';
import TopMenu from './components/TopMenu/TopMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter className="App">
      <TopMenu/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
