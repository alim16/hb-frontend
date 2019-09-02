import React from 'react';
import './App.css';
import styled from 'styled-components';

//good article *not used in codebase anymore*
///https://dzone.com/articles/loading-data-in-react-redux-thunk-redux-saga-suspe

function App() {

  //add css for component here
  const AppWrapper = styled.div`
  color: Blue //
  `

  return (
    <AppWrapper>
    <div className="App">
            <h1>Most amazing home page ever</h1>
    </div>
    </AppWrapper>
  );
}

export default App;
