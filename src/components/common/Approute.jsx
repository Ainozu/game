import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Board from 'Board'
import Notfound from 'Notfound';
import Select from '/components/prelobby/Select'

const Approute = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Select/> }/>
            <Route exact path="/g1" element={<Board set="set1"/>}/>
            <Route exact path="/g2" element={<Board set="set2"/>}/>
            <Route exact path="/g3" element={<Board set="set3"/>}/>
            <Route path="*" element={<Notfound/>}/>
        </Routes>
    </Router>
  )
}

export default Approute