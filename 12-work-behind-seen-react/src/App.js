import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import Demoparagraph from './components/Demo/Demoparagraph';
function App() {
  const [showparagraph, setshowparagraph] = useState(false);
  const [allowtoggle, setallowtoggle] = useState(false);
  const showinghandler = useCallback(() => {
    if (allowtoggle) {
      setshowparagraph((prevele) => !prevele)
    };
  }, [allowtoggle]);
  const allowhandler = () => {
    setallowtoggle(true);
  }
  console.log('running this component');
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demoparagraph show={showparagraph} />
      <Button onClick={allowhandler}>Allow Toggling</Button>
      <Button onClick={showinghandler}>Update! to test</Button>
    </div>
  );
}

export default App;
