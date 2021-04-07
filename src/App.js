import React from 'react';
import logo from './logo.svg';
import './App.css';
import IfElse from './study/IfElse';
import Forloop from './study/Forloop';
import General from './study/General';
import "bootstrap/dist/css/bootstrap.css";
import Practice from './study/Practice';
import Practice2 from './study/Practice2';
import Props from './study/Props';
import ForEach from './study/ForEach';
import GeneralProps from './study/GeneralProps';
import Spacex from './spacex';
import Test from './test';
import MovieList from './movie/MovieList';
import Intex from './practice/Intex';
import TestLali from './spacex/TestLali';


function App() {
  return ( 
    <div className="App">
      {/* <Practice2 /> */}
      {/* <TestLali /> */}
      {/* <Intex/> */}
      <MovieList/>
       {/* <Test /> */}
      {/* <ForEach/> */}
      {/* <IfElse /> */}
      {/* <Forloop/> */}
      {/* <General/> */}
      {/* <Practice/> */}
      {/* <Props/> */}
      {/* <GeneralProps/> */}
      {/* <Spacex/>  */}
    </div>
  );
}

export default App;
