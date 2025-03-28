// /src/App.js
import React from 'react';
import TopHeader from './components/TopHeader';
import SystemMessage from './components/SystemMessage';
import Game from './components/Game';
import LevelSelector from './components/LevelSelector';
import { LevelProvider } from './contexts/LevelContext';

function App() {
  return (
    <LevelProvider>
      <TopHeader />
      <SystemMessage />
      <Game />
      <LevelSelector />
    </LevelProvider>
  );
}

export default App;
