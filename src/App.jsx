import logo from './logo.svg';
import './App.css';
import TopMenu from './components/TopMenu/TopMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import Houses from './components/Houses/Houses';
import Callback from './components/Callback/Callback';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter className="App">
      <TopMenu/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/houses' element={<Houses />} />
        <Route path='/callback' element={<Callback />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
