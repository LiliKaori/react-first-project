import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import Users from './Pages/Users';
import GlobalStyle from './globalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Users />
      <GlobalStyle />
    </>
);

//Mesma coisa que:
// ReactDOM.render(<App />, document.getElementById('root'));
