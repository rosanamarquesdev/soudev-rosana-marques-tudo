// import Banner from "./components/Banner";
// import Footer from "./components/Banner";
import React from 'react';
import './App.scss';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Container } from "@mui/material";

import Home from "./pages/Home";


export default function App() {
  return (
    <>
      <Home />
    </>
  );
}
