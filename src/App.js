import React from 'react';
import Header from './components/Header';
import WebcamBox from './components/WebcamBox';
import ChatBox from './components/ChatBox';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h2 className='lett'>¡Utiliza la cámara para comunicarte por medio de lenguaje de señas!</h2>
      <main>
        <WebcamBox />
        <ChatBox />
      </main>
    </div>
  );
}

export default App;
