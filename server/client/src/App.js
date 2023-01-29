import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';

import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailView from './Components/home/details/DetailView';
import Cart from './Components/cart/Cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/product/:id' element={<DetailView />}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
            </Routes>
          </Box>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
