import React from 'react';
import Routes from './routes/index';
import GlobalStyle from './styles/global';
document.title = "Nova Ranking"

function App() {
  return (

    <div className="App">
      <Routes />
      <GlobalStyle />
    </div>

  );
}

export default App;
