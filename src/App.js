import React from 'react';
import './App.css';
import Navbar from './Components/layout/Navbar'
import Footer from './Components/layout/Footer';
import {Provider} from 'react-redux';
import store from './store/Store'
import Landing from './Components/home/Landing';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Landing />
      <Footer />
    </Provider>
  );
}

export default App;
