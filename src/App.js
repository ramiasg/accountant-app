import React , { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import classnames from 'classnames';

import Sidebar from './pages/Sidebar';
import Main from './pages/Main';

import store from './store';
import './App.css';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';



  export default function App(props){

  
  const [mobApp, setMobApp] = useState(false)
  const [mobSidebar, setMobSidebar] = useState(false)


  const click = (() => {
    setMobApp(!mobApp);
    setMobSidebar(!mobSidebar);
  })


    let app = classnames('app', {mobApp});
    let sidebar = classnames('sidebar', {mobSidebar});
    return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={app}>
          <Navbar click={click} />
          <Sidebar sidebar={sidebar} />  
          <Main click={click}/>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
 
 )
  }






