import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import SearchForm from "../SearchForm/SearchForm";

function App () {
  const [isLanding, setisLanding] = useState(false);

  return (
    <div className="app">
        <Routes>
          <Route path="/" element={
              <>
                <Header isLanding={isLanding} />
                <Main />
                <Footer />
              </>
            } 
          />
          <Route path="/movies" element={
              <>
                <Header isLanding={!isLanding} />
                <SearchForm />
                <Movies />
                <Footer />
              </>
            }
          />
          <Route path="/saved-movies" element={
              <>
                <Header isLanding={!isLanding} />
                <SearchForm />
                <SavedMovies />
              </>
            }
          />
          <Route path="/profile" element={
              <>
                <Header isLanding={!isLanding} />
                <Profile />
              </>
            }
          />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
