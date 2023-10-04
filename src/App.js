  import {BrowserRouter, Route, Routes} from 'react-router-dom';
  import './App.css';
  import React from 'react';
  import Header from './Components/header/header';
  import Navbar from './Components/navbar/navbar';
  import Dialogs from './Components/dialogs/dialogs';
  import Profile from './Components/profile/profile';
  



  const App = () => {
    return (
    <BrowserRouter>
    <div className="app-wrapper">   
     <Header/>
     <Navbar/>
     <div className="app-wrapper-content"> 
    <Routes>
     <Route path="/profile" element={<Profile/>}/>
     <Route path="/dialogs" element={<Dialogs/>}/>
     </Routes>
     </div>
     </div>
     </BrowserRouter>
    );
  }

  export default App;
